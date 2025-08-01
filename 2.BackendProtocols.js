/**
 *  Protocol properties
 * 
 *    Data format (Text , Json , xml)
 *    Binory (grpc, RESP)
 * 
 *    Transfer Mode :  Message , stream
 * 
 *    Addressing System DNS , IP , MAC
 * 
 *    Directionality : Bi , uni
 * 
 *    State , Routing 
 */


/**
 *  OSI MODAL : OPEN SYSTEM INTERCONNECT  (MI STUFF IN THIS COURSE MAY NEED TO WATCH FEW TIMES)
 * 
 *   APPLICATION AND TRANSPORT THIS LAYERS MAY BE WE NEED TO LEARN MORE AS BE DEV
 * 
 *    Application
 *    Presentation
 *    Session
 *    Transport
 *    Network 
 *    Data Link
 *    Physical
 * 
 *    SEGMENT , PACKETS , FRAMES 
 * 
 *   firewall is nothing just stuff at network layor that allow application to stop sending some request overall blocking
 * 
 *    THINK ABOUT APPLICATIONS LIKE VPN FIREWALL THOSE ARE NOT REALLY APPLICATION LEVEL APPS THOSE BUILT ON NETWORK LAYER OR BELOW
 * 
 * 
 *    OSI VS TCP/IP LAYER
 */



/**
 *  INTERNET PROTOCOL : IP  (WATCH ONLY ONCE JUST GETTING BASIC IDEA TRY TO UNDERSTAND BECAUSE MOSTLY ITS ABOUT NETWORK LAYER)
 * 
 *   IP BUILDING BLOCKS
 * 
 *   ARE YOU IN MY SUBNET ? UNDERSTAND MORE ABOUT SUBNET
 * 
 *   IP PACKETS  HEADER AND DATA SECTION
 * 
 *   PACKET ME HOTA KYA KYA HAI => SOURCE IP ADDRESS =>> DATA =>>>> DESTINATION IP ADDRESS
 * 
 *   WHAT IS IP FRAGMENTATION ?
 * 
 * In networking, MTU, or Maximum Transmission Unit, refers to the largest size (in bytes) of a data packet that can be transmitted across a network interface without being fragmented. It's a crucial setting that impacts network performance and efficiency. 

    IP PROTOCOL ARE STATELSS 

      TIME OT LIVE , FRAGMENTATION , FLAGS , SOURCE IP , DESTINATION IP , DATA ALL THIS STUFF GOES WITH PACKET

     ECN ITS ALL ABOUT WHAT IP PACKET INCLUDE


     ICMP : INTERNET CONTROL MESSAGE PROTOCOL

     do ping google.com you will see all you have learnded like ttl frgament packet loss and all


     hareshlakhwani@Hareshs-Laptop FundamentalOfBE % traceroute google.com
traceroute to google.com (216.58.200.174), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  4.151 ms  2.526 ms  2.095 ms
 2  117.99.111.255 (117.99.111.255)  4.100 ms  9.026 ms  9.915 ms
 3  182.66.231.117 (182.66.231.117)  7.809 ms  5.501 ms  4.743 ms
 4  116.119.73.90 (116.119.73.90)  19.824 ms
    116.119.106.214 (116.119.106.214)  13.022 ms
    116.119.106.218 (116.119.106.218)  18.681 ms

  THIS GIVES INFO LIKE HOW MANY ROUTES IT HAS TO GO TO REACH GOOGLE.COM
 */


/**
 *   UDP :  USER DATAGRAM PROTOCOL ALL THESE PROTOCOL ARE ABOVE IP LAYER PROTOCOL
 * 
 *   VIDEO STREAMING
 *   VPN
 *   DNS 
 *   WEBRTC (REAL TIME COMMUNICATION)
 * 
 *   LEARNED THAT WEBRTC IS BUILT ON UDP AND TOTALLY DIFFERENT FROM WEBSOCKET
 * 
 *   SOURCE IP
 *   DESTINATION IP
 *   SOURCE PORT
 *   DESTINATION PORT
 *   SOURCE HOST 
 *   DESTINATION HOST
 *  
 *   STATLESSS
 * 
 *   WHAT IT CONTAINS SOURCE DESTINATION PORT LENTGHT OF DATA CHECKSUM AND DATA
 * 
 *   less security  , chances of data courrptions
 * 
 * 
 * Domain Name System (DNS) poisoning happens when fake information is entered into the cache of a domain name server, 
 * resulting in DNS queries producing an incorrect reply, sending users to the wrong website. DNS poisoning also goes by the terms 
 * “DNS spoofing” and “DNS cache poisoning.”

 */

/**
 *  VIDEO STREAMING
 *  WEBRTC
 *  DNS
 *  VPN 
 * 
 *  ALL THESE ARE GOOD OPTION FOR UDP
 */

/**
 *  UDP DATAGRAM 
 * 
 *  SOURCE AND DESTINATION PORT
 *  CHECKSUM
 *  DATA LENGTH
 */


/**
 *  simple protocol
 *  header size is small 8byte where in IP its 20
 *  stateless
 *  no handshake
 *  consistency vs letency => this one has low latency
 */

/**
 *  no acnoledgement
 *  no guarantee delievery
 *  anyone can send data and no order
 *  security spoofed
 */



/**
 *  TCP : TRANSPITION CONTROL PROTOCOL
 * 
 *   RELIEABLE COMMUNICATION
 *   ANY BIDRECTIONAL COMMUNICATION
 *   WEB COMMUNICATION
 *   DATABASE COMMUNICATION
 * 
 *   SOURCE IP PORT / DESTINATION IP PORT HASHED
 *  
 *   LOST PACKETS ARE RETRASMITTED
 * 
 *    SYN.  SYN/ACK SYN
 * 
 * 
 *   NEED DEEPER UNDERSTANDING ON FILE DESCRIPTOR
 * 
 *   NO NEEDED TO WAIT FOR ROUND TRIP TO COMPLETE
 * 
 *   WE CAN ACKNOLEDGE MULTIPLE SYN WITH WITH ACK BEST THINK I LEARNED TODAY
 * 
 *   RETRANSIMISION GIVES GUREENTED THAT SAGEMENT WILL BE RECIEVED
 * 
 *   layer 4 protocol 
 *   gurentee 
 *   stateful
 */


/**
 *  TCP SEGEMENT ITS ALL ABOUT WHAT GET PASSED 20 BYTES OF HEADER
 * 
 *  https://en.wikipedia.org/wiki/Jumbo_frame
 */



/**
 *   TSL. (TRANSPORT LAYER SECURITY)
 * 
 *    vanilla HTTP
 *    diffie hellman
 *    OVERALL PURPOSE IS TO ENCRYPT DATA WHAT THAT TRANSFERTED TO SENGMENT IN OSI LAYERS
 *    SYMMETRIC KEY ALGORITM
 *    AUTHENTICATE SERVER
 *    SNI
 *    PRESHARED 
 *    RSA PUBLIC PRIVATE CERTIFIT SHARING
 *    TLS 1.2 AND TLS 1.3
 *    X + Y + Z => Z CAN BE PUBLIC AND X AND Y PRIVATE DIFF HELLMAN ROCKS
 * 
 *   DIFFMAN >>>> RSA PUBLIC KEY >>>>> 1.3 >>>> 1.2 
 */



/**
 *  HTTP 1.1
 * 
 *   method  
 *   path 
 *   protocol
 *   headers
 *   body
 * 
 * 
 *  protocol
 *  code
 *  code text
 *  headers
 *  body
 * 
 *  REQUIRE HANDSHAKE BECAUSE BUILT ON TOP OF TCP
 *  FIRST TCP HANDSHAKE
 *  THEN TSL HANDSHAKE
 *  THEN HTTP STUFF STARTS
 * 
 *  http 1.1 keep alive is gift but still 6 crome limit is not good part
 * 
 *   host option was not there in 1.0 weird
 * 
 *  PERSISTABD CONNECTION
 *  LOW LATECY AND LOW CPU USAGE
 * 
 *  WHAT IS HTTP SMUGLING
 *  WHAT IS PIPLINING IN HTTP 1.1 ? OVERALL CLIENT IS ABLE TO SEND MULTIPLE REQUEST IS PIPLINING PREVIOUSLY ONE REQUEST AT TIME ONLY
 *  NO ONE USES PIPLELING IN HTTP 1.1 AND YES ITS WEIRD BECUASE IT WAITS FOR ORDERING 
 *  ALSO NEED TO UNDERSTAND HOW ONE IP CAN HOST 1000 HOST
 * 
 *  HTTP2
 *   
 *     SPDY
 *     COMPRESSION
 *     MULTIPLAXING NEED TO LEARN MORE
 *     SERVER PUSH (DEAD)
 *     SECURE (PROTOCOL OSSIFICATION)
 *  * 
 */



/**
 *    HTTPS AND NODE JS  AND TLS 
 * 
 *    HTTPS ======= HTTP + TLS (DIFF HELLMAN + RSA KEY TLS 1.2 OR 1.3 WHATEVER YOU SAY BUT S ADDED IN HTTPS BECAUSE WE ADDED THIS TLS LAYER IN OSI SESSION LAYER)
 * 
 *    ASYMTRIC ENCRIPTION IS TO COSTLY TO MUCH COMPUTE
 *  
 *  https://en.wikipedia.org/wiki/Advanced_Encryption_Standard
 * 
 *   SSL IS OLD NAME FOR TLS 
 * 
 *    CERTIFICATES : IT JUST CONTAIN PUBLIC KEY WITH METADATA SO WE DON'T ASK FOR PUBLIC KEY WE ASK FOR CERTIFICATE 
 */


/**
 *  WEB SOCKET
 * 
 *   BI-DIRECT COMMUNICATION  (LAYER 7 PROTOCOL REALLY ?)
 * 
 *   TCP DOES SO MUCH
 *   WE KEEP THE CONNECTION ALIVE
 *   WS OR WSS THESE PROTOCOL WE USE
 * 
 *    101 SWITCHING PROTOCOL FROM HTTP TO WS
 *    UPGRADE HEADER USED 
 * 
 *    CHATTING , 
 *    LIVE FEED  (I FEEL SERVER SIDE EVENTS MAKE MORE SENSE)
 *    
 * 
 *     FULL DUPLEX
 *     HTTP COMPETIBLE
 *     FIRWALL FRIENDLY
 * 
 *     PROXING IS TRICKY 
 * 
 *     SOME CONNECTION GET TERMINATED 
 * 
 *    WHAT IS PING PONG IN WS REALLY INTERSTING
 *    STATEFULL
 * 
 *    LONG POLLING IS KIND OF GOOD EXAMPLE OR ALTERNATIVE
 *    
 */


/**
 *  HTTP 2 (NEED TO SEE HOW ITS GOOD FROM 1 AND 1.1)
 *  1.1 STILL LEADS IN RACE (6 CONNECTION)
 * 
 *  REALLY SHOULD LEARN MORE ABOUT IT LIKE HOW IN SINGLE CONNECTION MULTIPLE REQUEST CAN GO
 *  ALSO WHATS THAT STREAM STUFF LIKE CLIENT SEND ODD NUMBER AND SERVER EVEN
 * 
 *  HTTP2 WITH PUSH (DEPRECATED)
 *  PREFECTH PRECONNECT ARE THOSE BAD IDEA
 * 
 *  SO STUFF THAT WE LEARNED ABOUT MULTIPLAXING IS POSSIBLE HERE IN HTTP2 AND THATS WHY IN SINGLE REQUEST
 *  WE ARE ABLE TO SEND MULTIPLE CONENCTION
 * 
 *  COMPRESSION IS BEST 
 * 
 *  SERVER PUSH
 * 
 *  SECURE BY DEFAULT BECAUSE OF DEFAULT AUTHENTICATION 
 * 
 *  TCP HEAD OF LINE BLOCKING (TCP ORDERING)
 * 
 *  SERVER PUSH NEVER PICKED UP
 * 
 *  HIGH CPU USAGE
 * 
 *  STREAM IS BEFFIFT BUT ISSUE ALSO BECAUSE OF ORDERING IN CASE OF MULTIPLE REQUEST
 * 
 *  MULTIPLAXING IS REASON MAINLY ITS FAST
 */


/**
 *  HTTP 3 QUIC (MULTIPLEXED STREAMS)
 * 
 *  now understood http2 blocking it real not good think thats why upd wins does not care about lossing packets speed matters
 *  HTTP USES QUIC
 *  QUIC HAS STREAMS
 *  QUIC USES UDP
 *  TLS IN ONE HANDSHAKE
 *  CONNECTION MIGRATION IS SOMETHING WE NEED TO GO DEEP
 *  HPACK COMPRESSION ALGORITHM for http2
 *  QPACK FROM HTTP3
 *  QUIC DOES NOT ALLOW FRAGMENTATION SO WHAT IF PACKET SIZE IS MORE THEN MTU SO USE SMALL DATAGRAM / SAGEMENT / FRAME / PACKETS
 */


/**
 *  GRPC =>>> HTTP2 KO AAGE BADANE KA KAAM
 */

/**
 *  WEB RTC
 * 
 *  NAT 
 *  STUN
 *  TURN 
 *  ICE
 *  SDP
 *  SINGLING THE SDP
 * 
 *  DEMO IS REALLY KILLER DIRECT CODE IN BROWSER
 * 
 *  connect through public interfaces
 *  find most optimal part
 *  subnet masking
 *  Network Address Transication
 */


/**
 *  MANY WAYS TO HTTPS SHORT VIDEOS 
 *  STYLE OF COMMUNICATION
 * 
 *  ESTABLISH CONNECTION
 *  ESTABLISH ENCRYPTION
 *  SEND DATA
 *  CLOSE CONNECTION
 * 
 *   HTTPS OVER TCP WITH TLS 1.2
 * 
 *   SEE ONE THINK WE NEED TO BE CLEAR ONE IS TCP CONNECTION ITS SIMPLE BUT IT DOES NOT INCLUDE ANYTHING REALATED TO SECURITY/ENCRIPTION STUFF
 *   AND FOR THAT ONLY WE HAVE TLS 1.2 1.3 client hello / server hello client fin / server fin OVERALL WE NEED TO UNDERSTAND IMPORTANCE OF 
 *   TLS NO MATTER ITS 1.2 1.3 OVERALL GOAL IS TO HELP WITH ENCRIPTION
 * 
 *   OVERALL DIFFERNT IF YOU SEE IN TLS 1.2 AND 1.3 IS IN 1.3 YOU HAVE ONE ROUND TRIP ONLY CLIENT HELLO / SERVER HELLO AND WE LEARNED ABOUT IT
 *   DIFF HELLMAN STUFF IN TLS LECTURE AND HOW ITS MORE SECURE OVERALL IT INCLUDE LOT OF MATHAMATICS BUT STILL CORE SHOULD BE CLEAR WHY TLS IS
 *   P1 AND THEN UNDERSTAND VERSION OF TLS ALSO 1.1 NO ONE USES IT
 * 
 *   ABOVE BOTH WHERE ON OVER TCP + TSL 
 * 
 *   BUT NOW LETS TALK ABOUT HTTPS OVER QUIC (HTTP3)
 *   EVERTHING IN SINGLE ROUND TRIP
 *   HERE EVERYTHING IS UDP
 * 
 *   WHAT IS TCP FAST OPEN
 *   
 *   0RTT HOW EVEN 0 ROUND TRIP IS POSSIBLE THAT ALSO IN TCP + TLS
 */


/**
 *  overall we are learning mainly three thing here
 * 
 *   first what are the ways client and server communication happens THIS IS MOST IMPORTENT
 *   REQEST/RESPONSE
 *   SHORT POLLING
 *   ASYC/SYNC
 *   LONG-POLLING
 *   SSE 
 *   PUSH
 *   WEBSOCKET
 *   PUB/SUB 
 *   STATELESS AND STATEFULL
 * 
 * 
 *  ONCE YOU HAVE IDEA ON THOSE STUFF NEXT GOES LITTLE MORE DEEPER ON UNDERSTAND DIFFERENT PROTOCOLS
 * 
 *      UNDERSTANDING OSI MODAL
 *      IP
 *      TCP
 *      UDP
 *      WEBSOCKET 
 *      HTTP 1.1 2 3
 *      TLS 1.2 / 1.3
 *      CERTIFICATES 
 *      QUIC
 *      WEBRTC
 *      GRPC GRPC GRPC GRPC GRPC STUFF THAT NEEDED TO BE LEARNED
 * 
 * 
 *  ONCE WE HAVE IDEA OF DIFFFERENT COMMUNICATION TYPES AND PROTOCOL NEXT WE ARE MOVING WITH BACKEND PATTERN
 * 
 *  OVERALL THESE THREE PARTS LIKE COMMUNICATION / PROTOCOL / PATTERN IS CORE OF THIS COURSE
 */


/**
 *  BACKEND EXECUTION PATTERN 
 * 
 *   PROCESS VS THREAD whats the difference 
 * 
 *    thread is just light weight process
 *    THREAD DOES NOT HAVE SPEPRATED MEMORY IT JUST SHARE WHATS PROCESS HAS SINGLE PROCESS CAN HAVE MULTIPLE THREAD (LWP)
 * 
 *   what is race condition in case of multi threading
 *   IN MOST OF CASES MULTI TRHEADING NOT REALLY GOOD IDEA 
 * 
 *   APACHED , ENVOY MULTI THREDING EXAMPLE
 * 
 *   SYC QUEUE AND ACCEPT QUEUE
 *   HASHING 
 *   PORT MATCHING
 * 
 *   https://www.cloudflare.com/learning/ddos/syn-flood-ddos-attack/
 * 
 *   KERNAL CREATES OVERALL 4 QUEUS
 *   SNY QUEUE
 *   ACCEPT QUEUE
 *   SEND BUFFERS (QUEUE)
 *   RECEIVE BUFFERS (QUEUE)  
 * 
 *   https://en.wikipedia.org/wiki/Zero-copy
 *   
 *   Nagles alogrithm
 * 
 *   THREE CORE PARTS AS BELOW KERNAL IS KILLER
 *   PROCESS AND THREAD
 *   SYN AND ACCEPT QUEUE
 *   SEND AND RECIEVE BUFFUR
 * 
 *   need to learn more what if recieve queue get fulled
 * 
 *   COMMUNICATION BETWEEN BE AND KERNAL IS WHAT WE LEARNED HERE
 * 
 *   LISNER 
 *   READER
 *   ACCEPTOR
 * 
 *  NODE HAS SINGLE LISNER READER AND ACCEPTOR ALL IN ONE THREAD
 * 
 *  SO_REUSEPORT LEARN MORE ABOUT
 * 
 *  NAGEL ALGORITHEM COULD BE ISSUE IN CLIENT DEALY REALLY GOOD VIDEO 
 *  why we have to wait until limit matches single big i need mean i need i don't need to wait 1460
 * 
 *   TCP_NODEALY
 * 
 *  https://github.com/curl/curl/blob/master/docs/libcurl/opts/CURLOPT_TCP_NODELAY.md
 * 
 *  https://curl.se/libcurl/c/CURLOPT_TCP_NODELAY.html
 */



/**
 *  PROXING AND REVERSE PROXING
 * 
 *   SERVER THAT MAKE REQUEST ON BEHALF OF YOU
 *   
 *    TCP CONNECTION YOU AND YOUR PROXY
 * 
 *  IDENTITY CHUPANE KE LIYE VPN IS BEST EXAMPLE
 * 
 * Yes, a Service Worker acts like a programmable proxy between your web app and the network.

   BLOCK SITES
   LOGGING 
   MICROSERVICES
   BURP SUITE IS EXAMPLE OF PROXY

   REVERSE PROXY => HERE CLIENT DON'T KNOW FINAL DESTINATION

   FOR REVERSE PROXY I SEE ONE GOOD THINK IS LOAD BALANACING THAT MAKE SENSE
   AB TESTING IS ALSO GOOD EXAMPLE IF YOU SEE LIKE 10% OF MY REQUEST GOES TO THIS SERVER REST TO THISS

 */

   /**
    *  LAYER 4 AND LAYER 7 LOAD BALANCING
    * 
    *   LAYER 4
    *   simpler load balancing
    *   efficient
    *   more secure
    *   work with any protocol
    *   one tcp connection  (NAT)
    * 
    *   No smart load balanciing (BHAI DATA KA PATA HE NHI TO KESE SMART LOADING KREGE WHAT ABOUT SEAING CONTENT LENGTH)
    *   NA FOR MICROSERVICE
    *   STICKY PER CONNECTION
    *   NO CACHING
    *   PROTOCOL UNAWER
    * 
    *   NO MUCH IDEA BUT DOES NOT LOOK GOOD IDEA AT LAYER 4 PROXY ONLY REASON WE DON'T KNOW WHAT DATA IT IS
    * 
    * 
    *   FOR LAYER 7 YOU SEND LOGICAL REQUEST MEANS IT UNDERSTAND DATA AND THEN MAKE DECITION ATLEAST IT UNDERSTAND HEADERS AND TYPE OF REQUEST
    *   AND IT CAN DECREPT THE DATA NOW I FEEL THIS ALSO NOT GOOD WHY LOAD BALANCER HAVE IN LAYER 7
    * 
    *   ATLEAST IN LAYER 7 WE CAN MAKE CLEAR DECISION THAT WHERE NEW REQUEST WILL GO
    * 
    *   WHAT IS HTTP SUMGLING https://portswigger.net/web-security/request-smuggling
    * 
    *   LAYER 7 IS GOOD FOR MICROSERVIES , API GATEWAY LOGIC
    *   AUTHENTICATION AND CACHING AND BEST FOR LOAD BALANCING
    * 
    *   but it decrypt data its not good think
    * 
    *   OVERALL NON OF THAT MAKE MORE SENSE AND SECURE BUT ATLEAST LAYER 7 HAS USE CASES BEST
    */


   /**
    *  WEBSOCKET LAYER 4 AND LAYER 7 PROXING  ABOVE ONE WAS FOR HTTP. FOR NOW WE ARE SKIPPING THIS
    * 
    * 
    *   AS WE ALREADY HAVE IDEA ON LOAD BALANCING ON LAYER 4 AND 7 
    * 
    * 
    *  OVERALL SKIPPED VIDEO IN THIS COURSE 2
    *  WEBRTC + WEBSOCKET LAYER 4 AND 7 PROXY
    */

   /**
    *  AGAIN MAIN FOCUS OF THIS COURSE IS TO EXPLAIN YOU BELOW TOPIC
    * 
    *     DIFFERENT WAYS OF COMMUNICATIONS LIKE
    *     POLLING (SHORT/LONG)
    *     REQUEST RESPONSE 
    *     ASYC/AWAIT
    *     PUB-SUB
    *     WEBSOCKET
    *     PUSH
    *     SSE (SERVER SIDE EVENTS)
    *     
    *    THEN NEXT BIG TOPIC IS TO UNDERSTAND DIFFERNT PROTOCOL
    * 
    *     OSI MODAL
    *     TCP
    *     UDP
    *     HTTP 1.1/2/3
    *     TLS
    *     CERTIFICATES
    *     GRPC
    *     WEBSOCKET
    *     WEBRTC
    * 
    *    THEN NEXT BIG TOPIC IS BACKEND COMMUNICATION PATTERN
    * 
    *      HERE MAINLY 3 THINGS WE NEED TO UNDERSTAND 
    * 
    *       PROCESS AND THREADS
    *       SYN AND ACCEPT QUEQUES (OS LEVEL STUFF)
    *       SEND BUFFER AND RECEIVE BUFFER
    * 
    * 
    *    AT LAST WHAT DO WE MEAN BY 
    *  
    *      PROXY AND REVERSE PROXY 
    *      LAYER 4 AND LAYER 7 LOAD BALANCING 
    *   
    *  WE WILL GO WITH THIS ENTIRE COURSE 2 MORE TIME FULLY GET IDEA ON ALL THIS TOPICS   
    */


   /**
    *  HOW CHAT GPT USE SSE
    * 
    *   first of all chat gpt use HTTP2 
    *   TLS 1.3
    *   ALT-SVTC HEADER 
    *   HTTP2 HAS MOST OF TIME ONE CONNNECTION THATS WHY CONNECTION ID IS SAME
    */


   // EVENT STREAM 

   /**
    * delta_encoding	"v1"	
12:20:17.230
delta	{"p": "", "o": "add", "v": {"message": {"id": "6cb4dba1-bcf4-4e42-87b5-88c27ef1d0d9", "author": {"role": "assistant", "name": null, "metadata": {}}, "create_time": 1752303016.756231, "update_time": null, "content": {"content_type": "text", "parts": [""]}, "status": "in_progress", "end_turn": null, "weight": 1.0, "metadata": {"citations": [], "content_references": [], "message_type": "next", "model_slug": "gpt-4o", "default_model_slug": "auto", "parent_id": "ee1185ae-53c0-457f-b91a-59e7800037ce", "model_switcher_deny": []}, "recipient": "all", "channel": null}, "conversation_id": "68720562-7e94-8001-9735-a3b59e08a826", "error": null}, "c": 0}	
12:20:17.281
message	{"type": "server_ste_metadata", "metadata": {"conduit_prewarmed": true, "fast_convo": true, "warmup_state": "warm", "is_first_turn": false, "model_slug": "gpt-4o"}, "conversation_id": "68720562-7e94-8001-9735-a3b59e08a826"}	
12:20:17.314
message	{"type": "message_marker", "conversation_id": "68720562-7e94-8001-9735-a3b59e08a826", "message_id": "6cb4dba1-bcf4-4e42-87b5-88c27ef1d0d9", "marker": "user_visible_token", "event": "first"}	
12:20:17.314
delta	{"p": "/message/content/parts/0", "o": "append", "v": "Hi"}	
12:20:17.314
delta	{"v": " Ha"}	
12:20:17.314
delta	{"v": "resh! \ud83d\ude04 \nLooks like we're in a *hi loop* \u2014 ready"}	
12:20:17.416
delta	{"p": "", "o": "patch", "v": [{"p": "/message/content/parts/0", "o": "append", "v": " when you are!"}, {"p": "/message/status", "o": "replace", "v": "finished_successfully"}, {"p": "/message/end_turn", "o": "replace", "v": true}, {"p": "/message/metadata", "o": "append", "v": {"is_complete": true, "finish_details": {"type": "stop", "stop_tokens": [200002]}}}]}	
12:20:17.520
message	{"type": "title_generation", "title": "Hi Loop", "conversation_id": "68720562-7e94-8001-9735-a3b59e08a826"}	
12:20:17.618
message	{"type": "message_stream_complete", "conversation_id": "68720562-7e94-8001-9735-a3b59e08a826"}	
12:20:17.642
message	{"type": "conversation_detail_metadata", "banner_info": null, "blocked_features": [], "model_limits": [], "limits_progress": [{"feature_name": "deep_research", "remaining": 5, "reset_after": "2025-08-11T06:50:18.518718+00:00"}], "default_model_slug": "auto", "conversation_id": "68720562-7e94-8001-9735-a3b59e08a826"}	
12:20:18.672
message	[DONE]	
12:20:18.672

    */

/**
 *  WHY DON'T THAT DO MODARATION NO IN CHATGPT API FOR EACH MESSAGE OR MAY BE THEY ARE NOT SHOWING IT JUST GET CALLED IN BACKGROUD
 */



/**
 *  THIS IS HOW YOU CAN DO SSE WITHOUT USING EVENT STREAM BROWSER API
 * 
 *  
 */

// async function connectToSSE() {
//   const response = await fetch('/sse-endpoint', {
//     method: 'GET',
//     headers: {
//       'Accept': 'text/event-stream'
//     }
//   });

//   const reader = response.body.getReader();
//   const decoder = new TextDecoder('utf-8');
//   let buffer = '';

//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;

//     buffer += decoder.decode(value, { stream: true });

//     let lines = buffer.split('\n');
//     buffer = lines.pop(); // Incomplete line stays in buffer

//     for (let line of lines) {
//       if (line.startsWith('data:')) {
//         const data = line.replace(/^data:\s*/, '');
//         try {
//           const json = JSON.parse(data);
//           console.log('Event received:', json);
//         } catch (e) {
//           console.log('Raw event:', data);
//         }
//       }
//     }
//   }
// }

/**
 *  THE JOURNY OF REQUEST TO BACKEND
 * 
 *   MAIN 6 STEPS
 * 
 *    ACCEPT
 *    READ 
 *    DECRPET
 *    PARSE
 *    DECODE
 *    PROCESS
 * 
 *  parsing is most expensive from above all
 * 
 *   https://medium.com/@hnasr/the-journey-of-a-request-to-the-backend-c3de704de223
 */