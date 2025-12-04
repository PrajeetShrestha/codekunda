# Generic HTTP Client Use Case

1. HTTP Client should be able to support all the HTTP Methods, GET, POST , PUT, DELETE etc
2. Client should support any URLRequest
3. URLReuest Header, Body and Query Parameter could be configurable
4. Result of request should be either Array, Object , Bool, 
5. Different types of Error
    - Connection
    - Parsing 
    - URL Error
    - Response format error
6. Notes: 
- Sometimes we only need to send request without expecting other response, HTTP code would be enough without any kind of parsing in terms of response. 
- 