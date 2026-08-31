function FindProxyForURL(url, host) {
    if (shExpMatch(host, "192.168.*") || shExpMatch(host, "127.*") || host === "localhost") {
        return "DIRECT";
    }
    return "HTTPS 127.0.0.1:2080; DIRECT";
}
