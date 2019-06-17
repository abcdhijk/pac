function FindProxyForURL(url, host) {
    var proxy = 'PROXY 127.0.0.1:56789; PROXY 192.168.0.101:56789; PROXY myassist:56789; DIRECT';
    var list = [
        'tms.dingtalk.com',
        'study.xuexi.cn',        
     ];

     for(var i=0;i<list.length;i++){
        if(list.indexOf(host) > -1){
            return proxy;
        }
     }
     return 'DIRECT';
}
