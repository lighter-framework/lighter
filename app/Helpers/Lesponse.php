<?php

namespace Lighter\Helper;

/**
 * Create lighter spark response. (Lighter spark + Response = Lesponse)
 *
 * @param bool $result
 * @param $data
 * @param string $message
 * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
 */
function Lesponse(bool $result, $data, string $message = '')
{
    return Response([
        'result' => $result,
        'data' => $data,
        'message' => $message,
    ]);
}