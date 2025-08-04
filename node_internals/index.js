
/**
 *  RISC VS CISC
 *  Machine code vs Assembly code
 *  Whats job of RUNTIME 
 *  are internpreted languages are slow or compiled based one word answer
 *  JIT
 *  V8
 *  Garbage collection pauses
 *  Mark And Sweep Collection
 *  V8 ENGINE HOW IT STORE OBJECT ARRAY AND PREMITIVES
 *  HIDDEN CLASS / PROPERTITY DESCRIPTOR
 *  BASED ON V8 ARCHITECTURE IS IT TRUE THAT ACCESSING OBJECT PROPERTY FIRST TUME IS O(N) OPERATION
 */

/**
 *  EVENT LOOP AND ITS PHASES
 *  Registering vs executing callback
 */

/**
 *  The main module phase (Initial Phase)
 *  Runs only once 
 *  No callback get executed
 *  Timer get register in this phase but on executed
 *  Every sync code is part of main phase or initial phase
 *  No event loop initialized yet in this phase
 *  MODULE AND IMPORTS ARE LOADED BEFORE EVEN THIS PHASE THEN WHY THE HELL WE CALL THIS PHASE AS INITAL PHASE   
 *  why do we use mjs for modules as extention
 *  WHATEVER YOU IMPORT IS GOING TO EXECUTE FIRST
 *  NOW IF YOU PUT IMPORT OR REQUIRE AFTER SOME CODE THEN IT WILL BE RUN AFTER ABOVE CODE ONLY THINK IT AS SYNC CODE 
 */

/**
 *  TIMER PHASE (LIKE SETTIMEOUT RELEATED ISSUE COMES HERE)
 * 
 *  what is sleep that keral use for timer
 *  RIGHT AFTER INITIAL PHASE
 *  EVENT LOOP GET INITILIZED HERE
 *  Not acturate
 *  Timer implemetation is incredible to learn
 *  all this get done in libUV atleast in NODE in case of pure JS it get done in BROWSER
 *  Understand what can impact your timer and whats wrong with it
 */


/**
 *  PENDING CALLBACKS (SECOND PHASE OF EVENT LOOP)
 *  mostly things are here is like TCP ERROR NEED TO UNDERSTAND MORE 
 *  Loopback (localhost) get more priority if it has error (Really)
 *  TIMER GETTING MORE PRIORITY THEN PENDING CALLBACK 
 */

/**
 *  TILL NOW WE HAVE LEARNED FOR THREE PHASES
 *   MAIN PHASE (INITAL PHASE) FOR ALL SYNC CODE
 *   FROM PHASE TWO WHERE EVENT LOOP STUFF GET STARTED
 *       TIMER PHASE (ALL ISSUES RELEATED SETTIMOUT COMES HERE)
 *       PENDING CALLBACK PHASE (MAINLY USED FOR TCP RELEATED ERROR AND HAS LEAST PRIORITY BUT GOOD UNDERSTANDING IN VIDEO)
 */


/**
 *  IDEL AND PREPARE PHASE (MOSTLY INTERNAL PHASE USED BY LIB_UV)
 *  NOT EXPOSED TO MODULES
 *  COMPLETELY INTERAL
 *   lib_uv is multi threaded
 *  WHAT IS epoll_ctl
 *  
 *  Prepare executes every iteration before poll
 *  all new connection get prepare in this phase to be added into epoll
 */

/**
 *  EPOLL (NEED TO UNDERSTAND DEEP)
 *  --------------------------------
 *  - epoll is a scalable I/O event notification system used by libuv in Node.js on Linux.
 *  - It's designed to monitor multiple file descriptors (FDs) to see if I/O is possible on any of them.
 * 
 *  HOW IT WORKS:
 *  - epoll_create() creates an epoll instance.
 *  - epoll_ctl() adds, modifies, or removes file descriptors (sockets, pipes, etc.).
 *  - epoll_wait() blocks and waits for I/O events on registered FDs.
 * 
 *  WHAT’S INTERESTING:
 *  - If you register an FD that doesn't exist or is already closed,
 *    epoll_ctl() fails *immediately* with EBADF (bad file descriptor).
 *  - It does **not** wait for epoll_wait() because it never adds the FD to the poll set.
 *  - So, there is **no polling overhead** for invalid or deleted descriptors.
 * 
 *  WHY THAT MATTERS:
 *  - Node.js (via libuv) checks for errors up front.
 *  - If FD is invalid, it short-circuits the event loop and calls the callback with an error (or drops it).
 *  - This prevents wasting CPU cycles waiting on invalid file descriptors.
 * 
 *  REAL NODE BEHAVIOR:
 *  - When you do something like fs.open() and get an invalid FD,
 *    libuv doesn’t even register it for polling — you get an error right away.
 * 
 *  PRO TIP:
 *  - You can detect when epoll skips by checking epoll_ctl() return values in C/libuv layer.
 *  - In high-scale systems, cleaning up stale FDs (e.g. closed sockets) is crucial
 *    to avoid unnecessary epoll_ctl() syscalls.
 * 
 *  IN SUMMARY:
 *  - epoll is fast because it skips overhead when the file descriptor is gone.
 *  - No wasted poll state, no CPU cycles, no waiting.
 */
