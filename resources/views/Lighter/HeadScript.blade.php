
    <script>
        window.Laravel = {
            csrfToken: '{{csrf_token()}}',
            isLocal: {{env('APP_ENV') == 'local' ? 'true' : 'false'}},
        }
    </script>
