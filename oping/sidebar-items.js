initSidebarItems({"enum":[["AddrFamily","Address family (IPv4 or IPv6) used to send/receive a ping."],["PingError","An error resulting from a ping option-setting or send/receive operation. May result from an error internal to `liboping` (in which case the error string is returned) or an error in converting a string hostname."]],"struct":[["Ping","A `Ping` struct represents the state of one particular ping instance: several instance-wide options (timeout, TTL, QoS setting, etc.), and a list of hostnames/addresses to ping. It is consumed when a single set of ping packets are sent to the listed destinations, resulting in an iterator over the responses returned."],["PingItem","One ping response from a destination that was added to the `Ping` context."],["PingIter","An iterator over ping responses. Will return one `PingItem` for each destination that was added to the `Ping` context."]],"type":[["PingResult",""]]});