const status={"tunnels":[{"name":"command_line","uri":"/api/tunnels/command_line","public_url":"https://b26b16ef.ngrok.io","proto":"https","config":{"addr":"http://localhost:8080","inspect":true},"metrics":{"conns":{"count":0,"gauge":0,"rate1":0,"rate5":0,"rate15":0,"p50":0,"p90":0,"p95":0,"p99":0},"http":{"count":0,"rate1":0,"rate5":0,"rate15":0,"p50":0,"p90":0,"p95":0,"p99":0}}},{"name":"command_line (http)","uri":"/api/tunnels/command_line%20%28http%29","public_url":"http://b26b16ef.ngrok.io","proto":"http","config":{"addr":"http://localhost:8080","inspect":true},"metrics":{"conns":{"count":0,"gauge":0,"rate1":0,"rate5":0,"rate15":0,"p50":0,"p90":0,"p95":0,"p99":0},"http":{"count":0,"rate1":0,"rate5":0,"rate15":0,"p50":0,"p90":0,"p95":0,"p99":0}}}],"uri":"/api/tunnels"};location.replace(status.tunnels[0].public_url+location.pathname);
