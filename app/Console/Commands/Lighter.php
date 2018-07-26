<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Collection;

class Lighter extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lighter:watch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Watch components directory and auto update app.js.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info("Watch start");
        $components = glob('./resources/assets/js/components/*.vue');

        while (true)
        {
            $newComponents = glob('./resources/assets/js/components/*.vue');

            if (md5(serialize($components)) != md5(serialize($newComponents)))
            {
                //Find new components
                foreach ($newComponents as $newComponent)
                {
                    if (!in_array($newComponent, $components))
                    {
                        $this->info('Found:'.$newComponent);

                        $filename = basename($newComponent);
                        $componentName = strtolower(preg_replace('/[a-z]+(?=[A-Z])|[A-Z]+(?=[A-Z][a-z])/', '\0-', basename($newComponent, '.vue')));

                        $jsComponent = "Vue.component('$componentName', require('./components/$filename'))";

                        $appJs = $this->getAppJsAsCollection();
                        $appJs->splice($appJs->search('/*Components here*/') + 1, 0, [$jsComponent]);
                        $this->setAppJsByCollection($appJs);
                    }
                }
                //Find removed components
                foreach ($components as $component)
                {
                    if (!in_array($component, $newComponents))
                    {
                        $this->info('Removed:'.$component);
                        $filename = basename($component);
                        $componentName = strtolower(preg_replace('/[a-z]+(?=[A-Z])|[A-Z]+(?=[A-Z][a-z])/', '\0-', basename($component, '.vue')));

                        $jsComponent = "Vue.component('$componentName', require('./components/$filename'))";

                        $appJs = $this->getAppJsAsCollection();
                        if(!$appJs->search($jsComponent)) break;
                        $appJs->splice($appJs->search($jsComponent), 1);
                        $this->setAppJsByCollection($appJs);
                    }
                }
                //Update components
                $components = $newComponents;
            }
            sleep(1);
        }
    }

    private function getAppJsAsCollection ()
    {
        return collect(explode("\n", file_get_contents('./resources/assets/js/app.js')));
    }

    private function setAppJsByCollection (Collection $collection)
    {
        file_put_contents('./resources/assets/js/app.js', $collection->implode("\n"));
    }
}
