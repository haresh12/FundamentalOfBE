
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
 *  - epoll is a high-performance I/O event notification system (Linux only).
 *  - Used by Node.js via libuv for async, non-blocking I/O (e.g., sockets, pipes).
 *  - Replaces older mechanisms like select() and poll() for scale (epoll handles 100k+ fds easily).
 * 
 *  HOW IT WORKS:
 *  - epoll_create() → creates an epoll instance.
 *  - epoll_ctl() → adds/removes/modifies file descriptors to watch.
 *  - epoll_wait() → blocks until events occur, returns array of active FDs.
 * 
 *  INTERESTING:
 *  - If FD doesn’t exist → epoll_ctl() fails immediately with EBADF (no wasted wait).
 *  - If FD is closed but not removed → epoll still wakes up but returns nothing (leak detection needed).
 *  - Works on **file descriptors**, not arbitrary JS handles — that’s why libuv wraps I/O in FDs.
 * 
 *  MODES:
 *  - Default: Level-triggered → keeps notifying while condition exists (safe for JS/Node).
 *  - Can be Edge-triggered (faster, but requires full buffer draining — Node avoids it).
 * 
 *  ADVANCED FEATURES:
 *  - **EPOLLONESHOT**: Only triggers once, must re-arm manually (used in some perf-sensitive C++ code).
 *  - **EPOLLET (Edge-triggered)**: Fires only when state changes, ideal for ultra-low-latency systems.
 *  - **EPOLLEXCLUSIVE** (since Linux 4.5): Prevents “thundering herd” if multiple threads wait on same fd.
 * 
 *  USED FOR:
 *  - TCP/UDP sockets (e.g. net.Server, HTTP, TLS)
 *  - Pipes and child process streams (e.g. `child_process`)
 *  - Some fs events (not all fs ops are epoll-based — some use thread pool)
 * 
 *  THINGS IT DOESN’T DO:
 *  - Doesn’t directly support regular disk file reads (those are blocking and offloaded to threadpool).
 *  - Doesn’t handle timers (setTimeout etc.) — those are tracked by libuv internally.
 *  - Doesn’t poll CPU-bound operations — just I/O readiness.
 * 
 *  PERFORMANCE NOTES:
 *  - O(1) add/remove/modify fd (epoll_ctl)
 *  - O(1) readiness notification (no linear scan like select/poll)
 *  - Scales efficiently even under 100k+ concurrent sockets
 * 
 *  INTEGRATION WITH NODE:
 *  - libuv initializes epoll loop in uv__io_init
 *  - Node registers fds for sockets, pipes, TTYs via epoll_ctl()
 *  - When epoll_wait() returns, libuv dispatches to JS event loop via callbacks (e.g. `socket.on('data')`)
 * 
 *  DEBUGGING TIPS:
 *  - Use `strace` or `perf` to trace epoll_ctl and epoll_wait in Node.js apps
 *  - Watch for leaked fds → they can cause “epoll wakes up but no events” issue
 *  - Use `lsof` or `/proc/<pid>/fd` to inspect live descriptors
 * 
 *  IN SUMMARY:
 *  - epoll is the backbone of non-blocking I/O in Node on Linux
 *  - It’s efficient, fast, and smart — skips polling dead FDs, handles readiness events with zero CPU polling
 *  - Understanding epoll helps you debug performance and memory leaks in production Node servers
 */
