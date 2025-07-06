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