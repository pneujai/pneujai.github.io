const status={"tunnels":[{"name":"command_line (http)","uri":"/api/tunnels/command_line%20%28http%29","public_url":"http://5e122d3b.ngrok.io","proto":"http","config":{"addr":"http://localhost:8080","inspect":true},"metrics":{"conns":{"count":0,"gauge":0,"rate1":0,"rate5":0,"rate15":0,"p50":0,"p90":0,"p95":0,"p99":0},"http":{"count":0,"rate1":0,"rate5":0,"rate15":0,"p50":0,"p90":0,"p95":0,"p99":0}}},{"name":"command_line","uri":"/api/tunnels/command_line","public_url":"https://5e122d3b.ngrok.io","proto":"https","config":{"addr":"http://localhost:8080","inspect":true},"metrics":{"conns":{"count":4,"gauge":0,"rate1":0.03776391227733392,"rate5":0.011872232229598309,"rate15":0.004275208439771707,"p50":5003018350,"p90":5004787200,"p95":5004787200,"p99":5004787200},"http":{"count":4,"rate1":0.03534843457965391,"rate5":0.011723029342037379,"rate15":0.004257362406204207,"p50":1994900,"p90":2992500,"p95":2992500,"p99":2992500}}}],"uri":"/api/tunnels"};location.replace(status.tunnels[0].public_url+location.pathname);
