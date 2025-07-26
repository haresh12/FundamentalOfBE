/**
 *  HOW CLIENT COMMUNICATE WITH BE
 */


/**
 * OSI MODAL MUST NEEDED TO UNDERSTAND ALL 7 LAYERS 
 */


/**
 *  LETS LEARN ABOUT ALL POSSIBLE WAY CLIENT AND SERVER COMMUNICATE
 */


/**
 *  1. REQUEST AND RESPONSE  : HTTP , DNS SSH WEB SQL REST SOAP GRAPHQL
 * 
 *   ONE THINK I NEED TO UNDERSTAND WHEN THIS GUY SAYS THAT PARSING HAS COST WHAT DO WE MEAN BY THAT LIKE WHY PLAIN TEXT ARE SIMPLE TO PARSE WHERE SOAP 
 *   JSON AND RPC (REMOTE PROTO BUFFER) ARE HARD AND TAKE TIME NEED TO LEARN WHICH ONE IS BETTER
 * 
 *    FOR IMAGE LIMIT FOR REQUEST RESPOSNE 7GB 
 * 
 *    SENDING DATA IN CHUNK HAS BENIFITS BHAI 3 RS MIL GYE SIRF LAST WALA EK RPS DENA BUT THEN MULTIPLE ROUND TRIP
 * 
 *     NOTIFICATION , CHAT ALL THESE PLACES MAY REQUEST RESPONSE MODAL NOT WORK VERY LONG REQUEST
 * 
 *      REQUEST PARSING AND REQUEST PROCESSING IS DIFFERENT BROTHER
 * 
 *      PACKETS 
 * 
 *     NO BODY IN GET REQUEST
 * 
 *    HEADER FIRST
 */


/**
 *  Syncronous vs Asyncronous workloads BEST
 * 
 *  Syncronous sucks most of time you are blocked man 
 * 
 *  Context switching bhai to block hai tu bhar ja me kisi or ko chance deta hu SYNC
 * 
 *  ASYC caller can work after sending request not blocked  (epoll)
 * 
 *  NODE JS USE EPOLL NEED TO UNDERTAND MORE ON THAT
 *   
 *  CALLER AND RECEIVER NOT IN SYNC
 * 
 *   4 WORKER THREAD  
 * 
 *   UNDERSTAND NODE JS IS JAVASCRIPT
 * 
 *    await DO IT REALLY BLOCK CODE NEED TO LEARN MORE 
 * 
 *   ASYNCRONUS PROMGRAMING
 * 
 *   BACKEND ALSO RUN REQUEST IN ASYC ?
 * 
 *   WHAT IS ASYC FOR FE NOT ALWAYS FOR BE ?
 *   BUT WHAT IF REQUEST GOES INTO QUEUE
 * 
 *   WHAT IS THAT ASYC COMMIT IN POSTGRAS?
 * 
 */


/**
 * 
 *    PUSH  
 * 
 *   THERE IS STUFF THAT CLIENT REALLY DON'T KNOW EXAMPLE SOME EVENTS HAPPEDN IN BE LIKE SOMEONE ADDED TWIT SOMEONE LIKED PROFILE NOW THOSE STUFF
 *   AS CLIENT YOU DON'T CHECK FOR EVERY SECOND ALTHO YOU CAN BUT NOT MAKE SENSE IN THAT CAST COMMUNICATION LIKE PUSH WORKS 
 * 
 * 
 *   HOW DOES YOUTUB HANDLES PUSH LIKE THINK ABOUT IT CARRI MINNATI POSTED VIDEO WHICH HAS 45M SUB WHAT IF ALL HAVE NOTIFICATION ON WILL YOUTUB SEND 
 *   NOTIFICATION TO ALL
 * 
 *   WHAT IF SERVER JUST SEND SEND SEND DATA ANY SERVER UNABLE TO HANDLE IT 
 * 
 *   UNI VS BI DIRECTIONAL STUFF NEEDED TO UNDERSTAND MORE ? 
 * 
 *   ALSO BASED ON THIS VIDEO WEBSOCKET IS ALSO LIKE PUSH MODAL AND YES IT MAKE SENSE
 */


/**
 *  SHORT POLLING VERY WELL KNOW ALREADY FAMOUS setInternval
 *  GOOD FOR LONG RUNNING REQUEST
 */


/**
 *  LONG POLLING : WHY KAFKA DECIDE TO GO WITH LONG POLLING 
 * 
 *  SERVER WILL RESPONSE ONLY WHEN DATA IS READY => MAY BE SENT TOGHETER TO MULTIPLE CLIENTS 
 *  Backend friendly
 *  Client can still disconnect
 * 
 *  Not real time bhai 30 min phele khtm ho gya tha abi vali queue me bej rha hai
 */


/**
 *  Basically today we got idea about
 * 
 *   Request Response
 *   Sync Asyc
 *   Push => loved it
 *   Short and long polling
 * 
 *   Main purpose to understand like why we have these many communication techniques and how we are leavering it example we learned like why request response may
 *   not gone work for every case
 */



/**
 *  SERVER SENT EVENTS
 * 
 *   GOOD BUT CLIENT MUST BE ONLUNE TO RECEIVE
 *   ALSO WHAT ABOUT HTTP1.1 6 CONNECTION LIMIT ISSUE
 * 
 *   ONLY ONE LINE TO DO HEADER text/event-stream // thats it
 * 
 *   EventSource in client and that one header in backend we are all set 
 * 
 * 
 *    VERY VERY SIMPLE FOR SURE  
 */



/**
 *  PUBLISH SUBSCRIBE  ONE PUBLISHIER MANY READERS
 * 
 *  WHAT IS HIGH COUPLING NEED TO LEARN PUB SHUB IS LIT NEED TO UNDERSTAND WHAT ABOUT IT
 * 
 *   YOUTUB UPLOAD IS BEST EXAMPLE
 * 
 *   WHAT IS RABBITMQ ?
 * 
 *   SEE TO BE REAL PUB SUB IS MORE DEEPER THEN YOU THINK OVERALL IF YOU THINK ON THAT ITS LIKE IF TO MANY SERVICES ARE DEPENENDED ON EACH OTHER 
 *   AND TIGHTLY COUPLED THEN NOT REALLY USEFUL IF YOU IF UNDERSTAND YOUTUB UPLOAD SERVICES EXAMPLE WE ARE REALLY GOOD TO GET SOME IDEA ON THAT
 * 
 *   REGADING RABBITMQ ITS NOT SOMETHING WE NEED TO WORRY ABOUT FOR NOW
 */



/**
 *  MULTIPLAXING AND DE-MULTIPLAXING  REALLY NEW FOR ME
 * 
 *   WHAT IS CONNECTION POLLING ? 
 * 
 *   CROM HTTP 1.1 LIMIT TO 6 CONNECTION IS LIT I FEEL THIS TOPIC NEED MORE DISCUSSION JUST CLEAR UNDERSTANDING IS PERFECT
 */


/**
 *  STATEFULL AND STATELESS LIT
 * 
 *   NEED TO LEARN WHY TCP IS STATEFUL 
 *   UDP STATELESS 
 */

/**
 *  SIDE CAR PATTERN SEE THIS IS THE FIRST WORD TILL NOW THAT I NEVER EVEN HEARD ABOUT WILL GO ONE MAX TIME WITH THIS BUT FOR ALL 
 *  OTHER TOPICS THAT WE LEARNED NEED TO WATCH IT AGAIN AND GO THROUGH IT AND WRITE DOWN POINT TILL NOW
 *  THIS IS BEST GOING FOR ALL OTHER TOPIC SPECIALLY ASYC AND AWAIT AND PUB-SUB PUT ALL ARE LIT
 * 
 *  WE MUST UNDERSTAND ALL THIS PATTERS MAINLY MORE COMMON ONE 
 * 
 * https://twitter.github.io/finagle/
 * 
 *  WHAT THE HACK IS PROXY ?
 *  
 *  loved how this proxy handles changes from http 1.1 to 2 o 3 without doing much from our side and just have client and server proxy
 */


/**
 * THESE ARE THE ALL PATTERS I LEARNED FROM COURSE
 * 
 *    REQUEST RESPONSE 
 *    ASYC AWAIT
 *    PUSH (NOT AS EASY AS YOU THINK)
 *    SHORT POLING
 *    LONG POLING 
 *    SERVER SENT EVENTS (text/event-stream) (EventSource)
 *    PubSub (youtub upload video is best example)
 *    MultiPlexing and DeMultiplexing
 *    SideCard Pattern (Need to little more deeper)
 */

/**
 * REQUEST RESPONSE - Classic pattern! Client sends a request, waits for server’s reply — simple, stateless, REST-style, everywhere!
 * ASYNC AWAIT - Modern JS way to handle asynchronous ops. Looks synchronous, behaves asynchronous. Makes code readable, predictable.
 * PUSH - Server pushes data to client without being asked. Not magic — needs infra like WebSockets or FCM behind the scenes!
 * SHORT POLLING - Client keeps asking, "Any update?" every few seconds. Works, but wasteful. Like checking mail every 10 sec.
 * LONG POLLING - Client asks, server *waits* until update, then responds. Keeps connection open longer — smarter than short polling.
 * SERVER SENT EVENTS (SSE) - One-way push over HTTP. Text/event-stream + EventSource — perfect for live scores, stock updates!
 * PubSub - Publisher fires an event (e.g., YouTuber uploads video), subscribers (clients) get it. Decoupled, scalable, powerful!
 * MultiPlexing & DeMultiplexing - Combine multiple streams in one channel (multiplex), separate them on receive (demux). Save ports, boost perf!
 * SideCar Pattern - Helper container runs *beside* main app (like logging, auth, caching). Decouples responsibilities. Powerful in microservices!
 */
