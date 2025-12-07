{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red183\green111\blue247;\red23\green24\blue24;\red202\green202\blue202;
\red54\green192\blue160;\red212\green212\blue212;\red113\green192\blue131;\red109\green115\blue120;\red246\green124\blue48;
}
{\*\expandedcolortbl;;\cssrgb\c77255\c54118\c97647;\cssrgb\c11765\c12157\c12549;\cssrgb\c83137\c83137\c83137;
\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c50588\c78824\c58431;\cssrgb\c50196\c52549\c54510;\cssrgb\c98039\c56471\c24314;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  useState\cf6 \strokec6 ,\cf4 \strokec4  useEffect \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 Code\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Heart\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Users\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Database\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Layout\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 ArrowRight\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 ArrowLeft\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Menu\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 X\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Globe\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 CheckCircle\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Activity\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 BarChart\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Smile\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Linkedin\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Sparkles\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Rocket\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'lucide-react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- DATA & TRANSLATIONS ---\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  translations \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     nav\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       about\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "About"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       current\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "2025-2026 Projects"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       portfolio\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Portfolio"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       team\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Team"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       contact\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Contact Us"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     hero\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       tag\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Founded in 2020"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       titleStart\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Engineering solutions for"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       titleHighlight\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "social impact"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Code4Good connects Computer Science students with non-profit organizations to build sustainable technological solutions."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       ctaPortfolio\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "View Our Portfolio"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       ctaLearn\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Learn More"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     about\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "About Us"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Technology with a Heart"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       p1\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Code4Good is a unique initiative at Reichman University where academic excellence meets social responsibility."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       p2\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Under the guidance of the Dean of Computer Science, Prof. Shimon Schocken, our students have been dedicating their skills to building technological infrastructure for non-profit organizations since 2020."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       p3\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Despite challenges, including the war and reserve duty service, our students remained committed to delivering impactful products."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       ceremony\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Students & Faculty Ceremony"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     current\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "2025-2026 Cohort"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "New Projects Underway"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       cardTitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Something Amazing is Coming..."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       cardDesc\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Our new student teams have just started working with 5 new non-profit organizations. We are currently in the development phase and can't wait to share their solutions with you later this year!"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       reveal\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Reveal Coming Summer 2026"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     portfolio\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Our Impact"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Project Portfolio"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       solutionLabel\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "The Solution"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       developedBy\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Developed By"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Our Team"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Program Leadership"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       mentorsTitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Industry Mentors"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       mentorsDesc\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Our professional mentors provide critical guidance, code reviews, and industry best practices to our student teams."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       pastManagersTitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Past Program Managers"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       pastManagersList\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "[List previous years' managers here]"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     footer\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       uni\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Reichman University, Herzliya"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       est\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Est. 2020"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       rights\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Code4Good. All rights reserved."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       built\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Built with \uc0\u10084 \u65039  by CS Students"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     nav\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       about\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1488 \u1493 \u1491 \u1493 \u1514 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       current\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1508 \u1512 \u1493 \u1497 \u1511 \u1496 \u1497 \u1501  2025-2026"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       portfolio\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1514 \u1497 \u1511  \u1506 \u1489 \u1493 \u1491 \u1493 \u1514 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       team\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1492 \u1510 \u1493 \u1493 \u1514 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       contact\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1510 \u1512 \u1493  \u1511 \u1513 \u1512 "\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     hero\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       tag\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1504 \u1493 \u1505 \u1491  \u1489 -2020"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       titleStart\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1508 \u1514 \u1512 \u1493 \u1504 \u1493 \u1514  \u1496 \u1499 \u1504 \u1493 \u1500 \u1493 \u1490 \u1497 \u1497 \u1501 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       titleHighlight\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1500 \u1488 \u1497 \u1502 \u1508 \u1511 \u1496  \u1495 \u1489 \u1512 \u1514 \u1497 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1514 \u1493 \u1499 \u1504 \u1497 \u1514  Code4Good \u1502 \u1495 \u1489 \u1512 \u1514  \u1489 \u1497 \u1503  \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1500 \u1502 \u1491 \u1506 \u1497  \u1492 \u1502 \u1495 \u1513 \u1489  \u1500 \u1506 \u1502 \u1493 \u1514 \u1493 \u1514 , \u1489 \u1502 \u1496 \u1512 \u1492  \u1500 \u1489 \u1504 \u1493 \u1514  \u1508 \u1514 \u1512 \u1493 \u1504 \u1493 \u1514  \u1496 \u1499 \u1504 \u1493 \u1500 \u1493 \u1490 \u1497 \u1497 \u1501  \u1489 \u1512 \u1497 -\u1511 \u1497 \u1497 \u1502 \u1488  \u1500 \u1489 \u1506 \u1497 \u1493 \u1514  \u1495 \u1489 \u1512 \u1514 \u1497 \u1493 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       ctaPortfolio\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1500 \u1514 \u1497 \u1511  \u1492 \u1506 \u1489 \u1493 \u1491 \u1493 \u1514 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       ctaLearn\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1511 \u1512 \u1488  \u1506 \u1493 \u1491 "\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     about\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1497  \u1488 \u1504 \u1495 \u1504 \u1493 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1496 \u1499 \u1504 \u1493 \u1500 \u1493 \u1490 \u1497 \u1492  \u1506 \u1501  \u1500 \u1489 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       p1\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Code4Good \uc0\u1492 \u1497 \u1488  \u1497 \u1493 \u1494 \u1502 \u1492  \u1497 \u1497 \u1495 \u1493 \u1491 \u1497 \u1514  \u1489 \u1488 \u1493 \u1504 \u1497 \u1489 \u1512 \u1505 \u1497 \u1496 \u1514  \u1512 \u1497 \u1497 \u1499 \u1502 \u1503  \u1492 \u1502 \u1513 \u1500 \u1489 \u1514  \u1502 \u1510 \u1493 \u1497 \u1504 \u1493 \u1514  \u1488 \u1511 \u1491 \u1502 \u1497 \u1514  \u1506 \u1501  \u1488 \u1495 \u1512 \u1497 \u1493 \u1514  \u1495 \u1489 \u1512 \u1514 \u1497 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       p2\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1489 \u1492 \u1504 \u1495 \u1497 \u1497 \u1514  \u1491 \u1497 \u1511 \u1503  \u1489 \u1497 \u1514  \u1492 \u1505 \u1508 \u1512  \u1500 \u1502 \u1491 \u1506 \u1497  \u1492 \u1502 \u1495 \u1513 \u1489 , \u1508 \u1512 \u1493 \u1508 ' \u1513 \u1502 \u1506 \u1493 \u1503  \u1513 \u1493 \u1511 \u1503 , \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1513 \u1500 \u1504 \u1493  \u1502 \u1511 \u1491 \u1497 \u1513 \u1497 \u1501  \u1488 \u1514  \u1499 \u1497 \u1513 \u1493 \u1512 \u1497 \u1492 \u1501  \u1500 \u1489 \u1504 \u1497 \u1497 \u1514  \u1514 \u1513 \u1514 \u1497 \u1493 \u1514  \u1496 \u1499 \u1504 \u1493 \u1500 \u1493 \u1490 \u1497 \u1493 \u1514  \u1500 \u1506 \u1502 \u1493 \u1514 \u1493 \u1514  \u1502 \u1488 \u1494  2020."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       p3\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1500 \u1502 \u1512 \u1493 \u1514  \u1492 \u1488 \u1514 \u1490 \u1512 \u1497 \u1501 , \u1499 \u1493 \u1500 \u1500  \u1492 \u1502 \u1500 \u1495 \u1502 \u1492  \u1493 \u1513 \u1497 \u1512 \u1493 \u1514  \u1492 \u1502 \u1497 \u1500 \u1493 \u1488 \u1497 \u1501 , \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1513 \u1500 \u1504 \u1493  \u1504 \u1513 \u1488 \u1512 \u1493  \u1502 \u1495 \u1493 \u1497 \u1489 \u1497 \u1501  \u1493 \u1502 \u1505 \u1512 \u1493  \u1502 \u1493 \u1510 \u1512 \u1497 \u1501  \u1489 \u1506 \u1500 \u1497  \u1492 \u1513 \u1508 \u1506 \u1492 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       ceremony\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1496 \u1511 \u1505  \u1505 \u1497 \u1493 \u1501  \u1506 \u1501  \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1493 \u1492 \u1505 \u1490 \u1500 "\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     current\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1495 \u1494 \u1493 \u1512  2025-2026"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1508 \u1512 \u1493 \u1497 \u1511 \u1496 \u1497 \u1501  \u1495 \u1491 \u1513 \u1497 \u1501  \u1489 \u1491 \u1512 \u1498 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       cardTitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1513 \u1492 \u1493  \u1502 \u1491 \u1492 \u1497 \u1501  \u1502 \u1514 \u1489 \u1513 \u1500 ..."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       cardDesc\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1510 \u1493 \u1493 \u1514 \u1497  \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1492 \u1495 \u1491 \u1513 \u1497 \u1501  \u1513 \u1500 \u1504 \u1493  \u1492 \u1495 \u1500 \u1493  \u1500 \u1506 \u1489 \u1493 \u1491  \u1506 \u1501  5 \u1506 \u1502 \u1493 \u1514 \u1493 \u1514  \u1495 \u1491 \u1513 \u1493 \u1514 . \u1488 \u1504 \u1493  \u1504 \u1502 \u1510 \u1488 \u1497 \u1501  \u1499 \u1512 \u1490 \u1506  \u1489 \u1513 \u1500 \u1489  \u1492 \u1508 \u1497 \u1514 \u1493 \u1495  \u1493 \u1502 \u1495 \u1499 \u1497 \u1501  \u1489 \u1511 \u1493 \u1510 \u1512  \u1512 \u1493 \u1495  \u1500 \u1513 \u1514 \u1507  \u1488 \u1514 \u1499 \u1501  \u1489 \u1508 \u1514 \u1512 \u1493 \u1504 \u1493 \u1514  \u1489 \u1492 \u1502 \u1513 \u1498  \u1492 \u1513 \u1504 \u1492 !"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       reveal\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1495 \u1513 \u1497 \u1508 \u1492  \u1489 \u1511 \u1497 \u1509  2026"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     portfolio\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1492 \u1492 \u1513 \u1508 \u1506 \u1492  \u1513 \u1500 \u1504 \u1493 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1514 \u1497 \u1511  \u1492 \u1508 \u1512 \u1493 \u1497 \u1511 \u1496 \u1497 \u1501 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       solutionLabel\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1492 \u1508 \u1514 \u1512 \u1493 \u1503 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       developedBy\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1508 \u1493 \u1514 \u1495  \u1506 \u1500  \u1497 \u1491 \u1497 "\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       subtitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1492 \u1510 \u1493 \u1493 \u1514  \u1513 \u1500 \u1504 \u1493 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1492 \u1504 \u1492 \u1500 \u1514  \u1492 \u1514 \u1493 \u1499 \u1504 \u1497 \u1514 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       mentorsTitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1504 \u1496 \u1493 \u1512 \u1497 \u1501  \u1502 \u1492 \u1514 \u1506 \u1513 \u1497 \u1497 \u1492 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       mentorsDesc\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1492 \u1502 \u1504 \u1496 \u1493 \u1512 \u1497 \u1501  \u1492 \u1502 \u1511 \u1510 \u1493 \u1506 \u1497 \u1497 \u1501  \u1513 \u1500 \u1504 \u1493  \u1502 \u1505 \u1508 \u1511 \u1497 \u1501  \u1492 \u1499 \u1493 \u1493 \u1504 \u1492  \u1511 \u1512 \u1497 \u1496 \u1497 \u1514 , \u1505 \u1511 \u1497 \u1512 \u1493 \u1514  \u1511 \u1493 \u1491  \u1493 \u1513 \u1497 \u1496 \u1493 \u1514  \u1506 \u1489 \u1493 \u1491 \u1492  \u1502 \u1493 \u1502 \u1500 \u1510 \u1493 \u1514  \u1500 \u1510 \u1493 \u1493 \u1514 \u1497  \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       pastManagersTitle\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1504 \u1492 \u1500 \u1497  \u1514 \u1493 \u1499 \u1504 \u1497 \u1514  \u1511 \u1493 \u1491 \u1502 \u1497 \u1501 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       pastManagersList\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "[\uc0\u1512 \u1513 \u1497 \u1502 \u1514  \u1502 \u1504 \u1492 \u1500 \u1497 \u1501  \u1502 \u1513 \u1504 \u1497 \u1501  \u1511 \u1493 \u1491 \u1502 \u1493 \u1514 ]"\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     footer\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       uni\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1488 \u1493 \u1504 \u1497 \u1489 \u1512 \u1505 \u1497 \u1496 \u1514  \u1512 \u1497 \u1497 \u1499 \u1502 \u1503 , \u1492 \u1512 \u1510 \u1500 \u1497 \u1492 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       est\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1504 \u1493 \u1505 \u1491  2020"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       rights\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Code4Good. \uc0\u1499 \u1500  \u1492 \u1494 \u1499 \u1493 \u1497 \u1493 \u1514  \u1513 \u1502 \u1493 \u1512 \u1493 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3       built\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1504 \u1489 \u1504 \u1492  \u1506 \u1501  \u10084 \u65039  \u1506 \u1500  \u1497 \u1491 \u1497  \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1500 \u1502 \u1491 \u1506 \u1497  \u1492 \u1502 \u1495 \u1513 \u1489 "\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  projectsData \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 Users\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 // Placeholder for logo - upload file and I'll add "filename.png" here\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Hostages Families Forum"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Managing advocacy events and volunteer shifts through WhatsApp surveys was inefficient. We created a centralized platform."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "A robust Event Management System connected to AWS. Features a Flask REST API and React/MUI frontend for easy shift scheduling."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "React"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "MUI"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Python Flask"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "AWS"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1496 \u1492  \u1502 \u1513 \u1508 \u1495 \u1493 \u1514  \u1492 \u1495 \u1496 \u1493 \u1508 \u1497 \u1501 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1499 \u1489 \u1512  \u1500 \u1488  \u1497 \u1504 \u1492 \u1500 \u1493  \u1508 \u1506 \u1497 \u1500 \u1493 \u1514  \u1489 \u1488 \u1502 \u1510 \u1506 \u1493 \u1514  \u1505 \u1511 \u1512 \u1497 \u1501  \u1489 \u1493 \u1493 \u1496 \u1505 \u1488 \u1508 ! \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1513 \u1500 \u1504 \u1493  \u1489 \u1504 \u1493  \u1488 \u1514 \u1512  \u1513 \u1502 \u1495 \u1493 \u1489 \u1512  \u1500 \u1513 \u1512 \u1514  \u1513 \u1500  AWS \u1500 \u1513 \u1497 \u1489 \u1493 \u1509  \u1504 \u1510 \u1497 \u1490 \u1497 \u1501  \u1500 \u1488 \u1497 \u1512 \u1493 \u1506 \u1497  \u1492 \u1505 \u1489 \u1512 \u1492 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1506 \u1512 \u1499 \u1514  \u1504 \u1497 \u1492 \u1493 \u1500  \u1488 \u1497 \u1512 \u1493 \u1506 \u1497 \u1501  \u1492 \u1499 \u1493 \u1500 \u1500 \u1514  REST API \u1489 -Flask \u1493 \u1510 \u1491  \u1500 \u1511 \u1493 \u1495  \u1489 -React \u1506 \u1501  MUI \u1500 \u1502 \u1502 \u1513 \u1511  \u1502 \u1513 \u1514 \u1502 \u1513  \u1502 \u1493 \u1491 \u1512 \u1504 \u1497  \u1493 \u1497 \u1491 \u1497 \u1491 \u1493 \u1514 \u1497 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "React"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "MUI"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Python Flask"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "AWS"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Noa Noach"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Rotem Medina"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Ohad Ben Amram"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Daniel Mass"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Dylan Lewis"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 Heart\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Mandala of the Heart"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Replaced manual email/SMS communication with an automated community management system."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "A Node.js & Express server integrating directly with Salesforce. Serves as the foundation for a future community app."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Node.js"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Express"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Salesforce API"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Security"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1504 \u1491 \u1500 \u1514  \u1492 \u1500 \u1489 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1499 \u1489 \u1512  \u1500 \u1488  \u1497 \u1504 \u1492 \u1500 \u1493  \u1514 \u1511 \u1513 \u1493 \u1512 \u1514  \u1502 \u1493 \u1500  \u1492 \u1511 \u1492 \u1497 \u1500 \u1492  \u1489 \u1488 \u1493 \u1508 \u1503  \u1497 \u1491 \u1504 \u1497 ! \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1489 \u1504 \u1493  \u1513 \u1512 \u1514  \u1492 \u1502 \u1513 \u1514 \u1500 \u1489  \u1506 \u1501  \u1502 \u1506 \u1512 \u1499 \u1514  \u1492 -Salesforce \u1493 \u1502 \u1492 \u1493 \u1493 \u1492  \u1489 \u1505 \u1497 \u1505  \u1500 \u1488 \u1508 \u1500 \u1497 \u1511 \u1510 \u1497 \u1492  \u1506 \u1514 \u1497 \u1491 \u1497 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1513 \u1512 \u1514  Node.js + Express \u1492 \u1499 \u1493 \u1500 \u1500  \u1488 \u1497 \u1502 \u1493 \u1514  \u1502 \u1513 \u1514 \u1502 \u1513 \u1497 \u1501  \u1493 \u1490 \u1497 \u1513 \u1492  \u1500 \u1504 \u1514 \u1493 \u1504 \u1497  Salesforce \u1500 \u1492 \u1510 \u1490 \u1514  \u1502 \u1497 \u1491 \u1506  \u1512 \u1500 \u1493 \u1493 \u1504 \u1496 \u1497  \u1489 \u1488 \u1493 \u1508 \u1503  \u1502 \u1488 \u1493 \u1489 \u1496 \u1495 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Node.js"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Express"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Salesforce API"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Security"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Etay Zaslavsky"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Omer Bengal"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Rotem Breslauer"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Omry Maor"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Haim Didi"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 Activity\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Not Abandoning Wounded"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "The organization was managing critical patient tracking on Excel spreadsheets."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "A custom automation ecosystem using Monday.com and Make. Handles appointment scheduling and patient tracking automatically."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Monday.com"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Make"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Automation"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1500 \u1488  \u1502 \u1508 \u1511 \u1497 \u1512 \u1497 \u1501  \u1508 \u1510 \u1493 \u1506 \u1497 \u1501  \u1489 \u1513 \u1496 \u1495 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1499 \u1489 \u1512  \u1500 \u1488  \u1497 \u1504 \u1492 \u1500 \u1493  \u1488 \u1514  \u1508 \u1506 \u1497 \u1500 \u1493 \u1514  \u1492 \u1506 \u1502 \u1493 \u1514 \u1492  \u1489 \u1488 \u1511 \u1505 \u1500 \u1497 \u1501 ! \u1492 \u1505 \u1496 \u1493 \u1491 \u1504 \u1496 \u1497 \u1501  \u1489 \u1504 \u1493  \u1502 \u1506 \u1512 \u1499 \u1514  \u1502 \u1493 \u1514 \u1488 \u1502 \u1514  \u1488 \u1497 \u1513 \u1497 \u1514  \u1500 \u1504 \u1497 \u1492 \u1493 \u1500  \u1502 \u1496 \u1493 \u1508 \u1500 \u1497 \u1501  \u1493 \u1514 \u1497 \u1488 \u1493 \u1501  \u1508 \u1490 \u1497 \u1513 \u1493 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1506 \u1512 \u1499 \u1514  \u1488 \u1493 \u1496 \u1493 \u1502 \u1510 \u1497 \u1492  \u1489 \u1488 \u1502 \u1510 \u1506 \u1493 \u1514  Monday.com \u1493 \u1470 Make \u1492 \u1502 \u1488 \u1508 \u1513 \u1512 \u1514  \u1502 \u1506 \u1511 \u1489  \u1513 \u1493 \u1496 \u1507  \u1493 \u1504 \u1497 \u1492 \u1493 \u1500  \u1492 \u1508 \u1506 \u1497 \u1500 \u1493 \u1514  \u1489 \u1510 \u1493 \u1512 \u1492  \u1508 \u1513 \u1493 \u1496 \u1492  \u1493 \u1502 \u1505 \u1493 \u1491 \u1512 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Monday.com"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Make"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Automation"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Maya Orpaz"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Yair Tzach"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Amit Frumkin"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Romi Golan"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 Smile\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Maslulim"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Tracking child development progress using pen and paper made long-term analysis impossible."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "A digital solution combining visual questionnaires with Google Sheets & Looker for powerful data analytics."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Google Sheets"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Looker Studio"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Data Analysis"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1505 \u1500 \u1493 \u1500 \u1497 \u1501 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1499 \u1489 \u1512  \u1500 \u1488  \u1497 \u1514 \u1506 \u1491 \u1493  \u1488 \u1514  \u1514 \u1492 \u1500 \u1497 \u1498  \u1492 \u1508 \u1497 \u1514 \u1493 \u1495  \u1513 \u1500  \u1492 \u1497 \u1500 \u1491 \u1497 \u1501  \u1506 \u1501  \u1491 \u1507  \u1493 \u1506 \u1496 ! \u1508 \u1514 \u1512 \u1493 \u1503  \u1496 \u1499 \u1504 \u1493 \u1500 \u1493 \u1490 \u1497  \u1492 \u1502 \u1513 \u1500 \u1489  \u1513 \u1488 \u1500 \u1493 \u1503  \u1493 \u1497 \u1494 \u1493 \u1488 \u1500 \u1497  \u1502 \u1492 \u1504 \u1492  \u1500 \u1497 \u1500 \u1491 \u1497 \u1501 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1506 \u1512 \u1499 \u1514  \u1492 \u1502 \u1489 \u1493 \u1505 \u1505 \u1514  \u1506 \u1500  Google Sheets \u1493 -Google Looker \u1492 \u1502 \u1488 \u1508 \u1513 \u1512 \u1514  \u1502 \u1506 \u1511 \u1489  \u1500 \u1488 \u1493 \u1512 \u1498  \u1494 \u1502 \u1503 , \u1504 \u1497 \u1514 \u1493 \u1495  \u1504 \u1514 \u1493 \u1504 \u1497 \u1501  \u1493 \u1505 \u1496 \u1496 \u1497 \u1505 \u1496 \u1497 \u1511 \u1493 \u1514  \u1500 \u1504 \u1497 \u1492 \u1493 \u1500  \u1492 \u1506 \u1502 \u1493 \u1514 \u1492 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Google Sheets"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Looker Studio"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Data Analysis"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Maayan Crystal"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Yoav Sborovsky"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Sapir Erlich"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Mazal Iliadjanov"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Asa Cohen"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 BarChart\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Fighters Without Borders"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Lack of data visibility made it hard to make strategic decisions about missions and volunteers."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "An advanced Grafana Dashboard that visualizes organization data for recruitment and mission planning."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Grafana"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Data Viz"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "BI"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1500 \u1493 \u1495 \u1502 \u1497 \u1501  \u1500 \u1500 \u1488  \u1490 \u1489 \u1493 \u1500 \u1493 \u1514 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1499 \u1489 \u1512  \u1500 \u1488  \u1502 \u1490 \u1513 \u1513 \u1497 \u1501  \u1489 \u1488 \u1508 \u1500 \u1492 ! \u1491 \u1513 \u1489 \u1493 \u1512 \u1491  \u1492 \u1502 \u1488 \u1508 \u1513 \u1512  \u1500 \u1502 \u1504 \u1492 \u1500 \u1497 \u1501  \u1500 \u1511 \u1489 \u1500  \u1492 \u1495 \u1500 \u1496 \u1493 \u1514  \u1502 \u1489 \u1493 \u1505 \u1505 \u1493 \u1514  \u1504 \u1514 \u1493 \u1504 \u1497 \u1501  \u1489 \u1504 \u1493 \u1490 \u1506  \u1500 \u1490 \u1497 \u1493 \u1505  \u1502 \u1514 \u1504 \u1491 \u1489 \u1497 \u1501  \u1493 \u1508 \u1514 \u1497 \u1495 \u1514  \u1502 \u1513 \u1500 \u1495 \u1493 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1491 \u1513 \u1489 \u1493 \u1512 \u1491  \u1489 -Grafana \u1513 \u1502 \u1504 \u1514 \u1495  \u1488 \u1514  \u1504 \u1514 \u1493 \u1504 \u1497  \u1492 \u1506 \u1502 \u1493 \u1514 \u1492 , \u1502 \u1494 \u1492 \u1492  \u1496 \u1512 \u1504 \u1491 \u1497 \u1501  \u1493 \u1502 \u1488 \u1508 \u1513 \u1512  \u1492 \u1508 \u1511 \u1514  \u1502 \u1505 \u1511 \u1504 \u1493 \u1514  \u1502 \u1513 \u1502 \u1506 \u1493 \u1514 \u1497 \u1493 \u1514  \u1500 \u1504 \u1497 \u1492 \u1493 \u1500  \u1502 \u1497 \u1496 \u1489 \u1497 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Grafana"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Data Viz"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "BI"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Paz Peleg"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Noam Shildekraut"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Libby Rosenman"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Gal Machluf"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 Heart\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "The Mother of the Lone Soldiers"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Scheduling cooking shifts for lone soldiers was done manually with pen and paper."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "A custom app overlaying TimeTree via REST API. Allows volunteers to sign up independently."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "TimeTree API"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "REST API"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Mobile"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1488 \u1502 \u1488  \u1513 \u1500  \u1492 \u1495 \u1497 \u1497 \u1500 \u1497 \u1501  \u1492 \u1489 \u1493 \u1491 \u1491 \u1497 \u1501 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1513 \u1497 \u1489 \u1493 \u1509  \u1502 \u1513 \u1502 \u1512 \u1493 \u1514  \u1489 \u1497 \u1513 \u1493 \u1500  \u1500 \u1495 \u1497 \u1497 \u1500 \u1497 \u1501  \u1489 \u1493 \u1491 \u1491 \u1497 \u1501  \u1504 \u1506 \u1513 \u1492  \u1497 \u1491 \u1504 \u1497 \u1514  \u1489 \u1510 \u1493 \u1512 \u1492  \u1513 \u1492 \u1511 \u1513 \u1514 \u1492  \u1506 \u1500  \u1492 \u1502 \u1506 \u1511 \u1489 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1488 \u1508 \u1500 \u1497 \u1511 \u1510 \u1497 \u1492  \u1492 \u1502 \u1489 \u1493 \u1505 \u1505 \u1514  \u1506 \u1500  TimeTree \u1492 \u1502 \u1488 \u1508 \u1513 \u1512 \u1514  \u1500 \u1502 \u1514 \u1504 \u1491 \u1489 \u1497 \u1501  \u1500 \u1492 \u1497 \u1512 \u1513 \u1501  \u1506 \u1510 \u1502 \u1488 \u1497 \u1514  \u1489 \u1506 \u1493 \u1491  \u1492 \u1502 \u1504 \u1492 \u1500 \u1497 \u1501  \u1513 \u1493 \u1502 \u1512 \u1497 \u1501  \u1506 \u1500  \u1489 \u1511 \u1512 \u1492 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "TimeTree API"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "REST API"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Mobile"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 []\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 Users\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Krembo Wings"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "The instruction department struggled to track activity plans in messy folders."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "A dedicated content library system (Moodle/Trello integration) to manage activity plans."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Moodle/Trello"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Content Mgmt"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Automation"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1499 \u1504 \u1508 \u1497 \u1497 \u1501  \u1513 \u1500  \u1511 \u1512 \u1502 \u1489 \u1493 "\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1495 \u1500 \u1511 \u1514  \u1492 \u1492 \u1491 \u1512 \u1499 \u1492  \u1492 \u1514 \u1511 \u1513 \u1514 \u1492  \u1500 \u1506 \u1511 \u1493 \u1489  \u1488 \u1495 \u1512  \u1502 \u1506 \u1512 \u1499 \u1497  \u1508 \u1506 \u1497 \u1500 \u1493 \u1514  \u1513 \u1492 \u1500 \u1499 \u1493  \u1500 \u1488 \u1497 \u1489 \u1493 \u1491  \u1489 \u1514 \u1497 \u1511 \u1497 \u1493 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1505 \u1508 \u1512 \u1497 \u1497 \u1492  \u1500 \u1504 \u1497 \u1492 \u1493 \u1500  \u1502 \u1505 \u1502 \u1499 \u1497 \u1501  \u1493 \u1502 \u1506 \u1512 \u1499 \u1497  \u1508 \u1506 \u1497 \u1500 \u1493 \u1514  (Moodle/Trello) \u1492 \u1502 \u1488 \u1508 \u1513 \u1512 \u1514  \u1490 \u1497 \u1513 \u1492  \u1504 \u1493 \u1495 \u1492  \u1493 \u1502 \u1506 \u1511 \u1489  \u1488 \u1495 \u1512  \u1492 \u1493 \u1512 \u1491 \u1493 \u1514 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Moodle/Trello"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Content Mgmt"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Automation"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 []\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf5 \strokec5 Database\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     logo\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     content\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       en\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Israel 2050"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Candidate sorting was inefficient, requiring manual SMS and emails."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "An automated sorting system using Airtable and Zapier for seamless communication."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Airtable"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Zapier"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Automation"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       he\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1497 \u1513 \u1512 \u1488 \u1500  2050"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1514 \u1492 \u1500 \u1497 \u1498  \u1502 \u1497 \u1493 \u1503  \u1492 \u1502 \u1493 \u1506 \u1502 \u1491 \u1497 \u1501  \u1492 \u1497 \u1492  \u1488 \u1497 \u1496 \u1497  \u1493 \u1499 \u1500 \u1500  \u1513 \u1500 \u1497 \u1495 \u1514  \u1492 \u1493 \u1491 \u1506 \u1493 \u1514  \u1493 \u1502 \u1497 \u1497 \u1500 \u1497 \u1501  \u1497 \u1491 \u1504 \u1497 \u1497 \u1501 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         solution\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1506 \u1512 \u1499 \u1514  \u1502 \u1497 \u1493 \u1503  \u1488 \u1493 \u1496 \u1493 \u1502 \u1496 \u1497 \u1514  (Airtable + Zapier) \u1492 \u1502 \u1506 \u1491 \u1499 \u1504 \u1514  \u1505 \u1496 \u1496 \u1493 \u1505 \u1497 \u1501  \u1493 \u1513 \u1493 \u1500 \u1495 \u1514  \u1514 \u1511 \u1513 \u1493 \u1512 \u1514  \u1500 \u1502 \u1493 \u1506 \u1502 \u1491 \u1497 \u1501  \u1489 \u1488 \u1493 \u1508 \u1503  \u1488 \u1493 \u1496 \u1493 \u1502 \u1496 \u1497 ."\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         tech\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 "Airtable"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Zapier"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Automation"\cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     team\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 []\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  managersData \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\cb3     name\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  en\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Shahar Horovitz"\cf6 \strokec6 ,\cf4 \strokec4  he\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1513 \u1495 \u1512  \u1492 \u1493 \u1512 \u1493 \u1489 \u1497 \u1509 "\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     title\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  en\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Program Manager"\cf6 \strokec6 ,\cf4 \strokec4  he\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1504 \u1492 \u1500  \u1514 \u1493 \u1499 \u1504 \u1497 \u1514 "\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     image\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "016A4422.jpg"\cf4 \strokec4  \cb1 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\cb3     name\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  en\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Maayan Levy"\cf6 \strokec6 ,\cf4 \strokec4  he\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1506 \u1497 \u1497 \u1503  \u1500 \u1493 \u1497 "\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     title\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  en\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Program Manager"\cf6 \strokec6 ,\cf4 \strokec4  he\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1504 \u1492 \u1500 \u1514  \u1514 \u1493 \u1499 \u1504 \u1497 \u1514 "\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 // Placeholder for Maayan's photo - upload file and I'll add "filename.jpg" here\cf4 \cb1 \strokec4 \
\cb3     image\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 null\cf4 \strokec4  \cb1 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\cb3     name\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  en\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Itay Zaslavsky"\cf6 \strokec6 ,\cf4 \strokec4  he\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1488 \u1497 \u1514 \u1497  \u1494 \u1505 \u1500 \u1489 \u1505 \u1511 \u1497 "\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     title\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  en\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Program Manager"\cf6 \strokec6 ,\cf4 \strokec4  he\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "\uc0\u1502 \u1504 \u1492 \u1500  \u1514 \u1493 \u1499 \u1504 \u1497 \u1514 "\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     image\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "VIN07994.jpg.jpg"\cf4 \strokec4  \cb1 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // --- COMPONENTS ---\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 Logo\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 imgError\cf6 \strokec6 ,\cf4 \strokec4  setImgError\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 .\cf4 \strokec4 useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{!\cf4 \strokec4 imgError \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 img \cb1 \
\cb3           src\cf6 \strokec6 =\cf7 \strokec7 "logo.png"\cf4 \strokec4  \cb1 \
\cb3           alt\cf6 \strokec6 =\cf7 \strokec7 "Code4Good Logo"\cf4 \strokec4  \cb1 \
\cb3           className\cf6 \strokec6 =\cf7 \strokec7 "w-12 h-12 object-contain"\cf4 \strokec4  \cb1 \
\cb3           onError\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setImgError\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3         />\cb1 \
\cb3       \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf8 \strokec8 /* Fallback SVG if image fails */\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "relative w-10 h-10 bg-[#2A9D8F] rounded-full flex items-center justify-center overflow-hidden shrink-0"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 svg viewBox\cf6 \strokec6 =\cf7 \strokec7 "0 0 24 24"\cf4 \strokec4  fill\cf6 \strokec6 =\cf7 \strokec7 "none"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6 text-white relative z-10"\cf4 \strokec4  stroke\cf6 \strokec6 =\cf7 \strokec7 "currentColor"\cf4 \strokec4  strokeWidth\cf6 \strokec6 =\cf7 \strokec7 "2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 path d\cf6 \strokec6 =\cf7 \strokec7 "M12 2L12 12"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "opacity-0"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 path d\cf6 \strokec6 =\cf7 \strokec7 "M8 12l4 4 4-4"\cf4 \strokec4  strokeLinecap\cf6 \strokec6 =\cf7 \strokec7 "round"\cf4 \strokec4  strokeLinejoin\cf6 \strokec6 =\cf7 \strokec7 "round"\cf4 \strokec4 />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 path d\cf6 \strokec6 =\cf7 \strokec7 "M12 16l-4-4"\cf4 \strokec4  strokeLinecap\cf6 \strokec6 =\cf7 \strokec7 "round"\cf4 \strokec4  strokeLinejoin\cf6 \strokec6 =\cf7 \strokec7 "round"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "opacity-50"\cf4 \strokec4 />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 path d\cf6 \strokec6 =\cf7 \strokec7 "M10 10L17 17L19 12L10 10Z"\cf4 \strokec4  fill\cf6 \strokec6 =\cf7 \strokec7 "white"\cf4 \strokec4  stroke\cf6 \strokec6 =\cf7 \strokec7 "none"\cf4 \strokec4  />\cb1 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 svg\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-xl tracking-tight text-gray-900 leading-none"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 &\cf4 \strokec4 lt\cf6 \strokec6 ;\cf5 \strokec5 Code4Good\cf6 \strokec6 &\cf4 \strokec4 gt\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-xs text-[#2A9D8F] font-medium tracking-wide uppercase"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf5 \strokec5 Coding\cf4 \strokec4  \cf2 \strokec2 for\cf4 \strokec4  social good\cb1 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 NavLink\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  href\cf6 \strokec6 ,\cf4 \strokec4  children\cf6 \strokec6 ,\cf4 \strokec4  mobile\cf6 \strokec6 ,\cf4 \strokec4  onClick \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 <\cf4 \strokec4 a \cb1 \
\cb3     href\cf6 \strokec6 =\{\cf4 \strokec4 href\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3     onClick\cf6 \strokec6 =\{\cf4 \strokec4 onClick\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     className\cf6 \strokec6 =\{\cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \cb1 \strokec4 \
\cb3       mobile \cb1 \
\cb3         \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'block w-full px-4 py-3 text-lg hover:bg-gray-50'\cf4 \strokec4  \cb1 \
\cb3         \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-sm font-medium hover:text-[#2A9D8F] transition-colors'\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf7 \strokec7  text-gray-600 cursor-pointer`\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \{\cf4 \strokec4 children\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 </\cf4 \strokec4 a\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 );\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 SectionHeading\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  subtitle\cf6 \strokec6 ,\cf4 \strokec4  title\cf6 \strokec6 ,\cf4 \strokec4  align \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'center'\cf6 \strokec6 ,\cf4 \strokec4  lang \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `mb-12 \cf6 \strokec6 $\{\cf4 \strokec4 align \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'left'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 lang \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'he'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'text-right'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-left'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-center'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-[#2A9D8F] font-bold tracking-wider text-sm uppercase mb-2 block"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 subtitle\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-3xl md:text-4xl font-bold text-gray-900"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `h-1 w-20 bg-[#2A9D8F] mt-4 rounded-full \cf6 \strokec6 $\{\cf4 \strokec4 align \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'left'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 lang \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'he'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'ml-auto mr-0'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'mr-auto'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'mx-auto'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 );\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 ProjectCard\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  project\cf6 \strokec6 ,\cf4 \strokec4  lang \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  content \cf6 \strokec6 =\cf4 \strokec4  project\cf6 \strokec6 .\cf4 \strokec4 content\cf6 \strokec6 [\cf4 \strokec4 lang\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 Icon\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  project\cf6 \strokec6 .\cf4 \strokec4 icon\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 imgError\cf6 \strokec6 ,\cf4 \strokec4  setImgError\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 .\cf4 \strokec4 useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group text-start"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6 flex-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-start justify-between mb-4 h-14"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 logo \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 imgError \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3              \cf6 \strokec6 <\cf4 \strokec4 img \cb1 \
\cb3                src\cf6 \strokec6 =\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 logo\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                alt\cf6 \strokec6 =\{\cf4 \strokec4 content\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                className\cf6 \strokec6 =\cf7 \strokec7 "h-full w-auto object-contain max-w-[120px]"\cf4 \strokec4  \cb1 \
\cb3                onError\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setImgError\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3              />\cb1 \
\cb3           \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-3 bg-teal-50 rounded-lg text-[#2A9D8F] group-hover:bg-[#2A9D8F] group-hover:text-white transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 Icon\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 24\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-bold text-gray-900 mb-2"\cf6 \strokec6 >\{\cf4 \strokec4 content\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-600 mb-4 text-sm leading-relaxed"\cf6 \strokec6 >\{\cf4 \strokec4 content\cf6 \strokec6 .\cf4 \strokec4 description\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 h4 className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-bold text-gray-900 uppercase tracking-wide mb-2"\cf6 \strokec6 >\{\cf4 \strokec4 translations\cf6 \strokec6 [\cf4 \strokec4 lang\cf6 \strokec6 ].\cf4 \strokec4 portfolio\cf6 \strokec6 .\cf4 \strokec4 solutionLabel\cf6 \strokec6 \}</\cf4 \strokec4 h4\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 content\cf6 \strokec6 .\cf4 \strokec4 solution\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-wrap gap-2 mb-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 \{\cf4 \strokec4 content\cf6 \strokec6 .\cf4 \strokec4 tech\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 item\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 span key\cf6 \strokec6 =\{\cf4 \strokec4 idx\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "px-2 py-1 bg-teal-50 text-[#2A9D8F] text-xs font-semibold rounded-md border border-teal-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 item\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 team \cf6 \strokec6 &&\cf4 \strokec4  project\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-gray-50 px-6 py-4 border-t border-gray-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 h4 className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-bold text-gray-400 uppercase tracking-wide mb-2"\cf6 \strokec6 >\{\cf4 \strokec4 translations\cf6 \strokec6 [\cf4 \strokec4 lang\cf6 \strokec6 ].\cf4 \strokec4 portfolio\cf6 \strokec6 .\cf4 \strokec4 developedBy\cf6 \strokec6 \}</\cf4 \strokec4 h4\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-wrap gap-x-4 gap-y-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 student\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 span key\cf6 \strokec6 =\{\cf4 \strokec4 idx\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-medium text-gray-700 flex items-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "w-1.5 h-1.5 rounded-full bg-[#2A9D8F] ltr:mr-1.5 rtl:ml-1.5"\cf4 \strokec4 ></span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 student\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 LeadershipCard\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  name\cf6 \strokec6 ,\cf4 \strokec4  title\cf6 \strokec6 ,\cf4 \strokec4  image \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 imgError\cf6 \strokec6 ,\cf4 \strokec4  setImgError\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 .\cf4 \strokec4 useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  initials \cf6 \strokec6 =\cf4 \strokec4  name\cf6 \strokec6 .\cf4 \strokec4 split\cf6 \strokec6 (\cf7 \strokec7 ' '\cf6 \strokec6 ).\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 n \cf6 \strokec6 =>\cf4 \strokec4  n\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ]).\cf4 \strokec4 join\cf6 \strokec6 (\cf7 \strokec7 ''\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-32 h-32 rounded-full overflow-hidden mb-4 bg-teal-50 border-4 border-teal-100 flex items-center justify-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{!\cf4 \strokec4 image \cf6 \strokec6 ||\cf4 \strokec4  imgError \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-3xl font-bold text-[#2A9D8F]"\cf6 \strokec6 >\{\cf4 \strokec4 initials\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 img \cb1 \
\cb3             src\cf6 \strokec6 =\{\cf4 \strokec4 image\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3             alt\cf6 \strokec6 =\{\cf4 \strokec4 name\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3             className\cf6 \strokec6 =\cf7 \strokec7 "w-full h-full object-cover"\cf4 \strokec4  \cb1 \
\cb3             onError\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3               e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 onerror \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ;\cf4 \strokec4  \cb1 \
\cb3               setImgError\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \}\}\cf4 \cb1 \strokec4 \
\cb3           />\cb1 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-bold text-gray-900 text-center"\cf6 \strokec6 >\{\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[#2A9D8F] font-medium text-sm mb-4 text-center"\cf6 \strokec6 >\{\cf4 \strokec4 title\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 a href\cf6 \strokec6 =\cf7 \strokec7 "#"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "p-2 text-gray-400 hover:text-[#0077b5] transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf5 \strokec5 Linkedin\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 a\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 App\cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 isMenuOpen\cf6 \strokec6 ,\cf4 \strokec4  setIsMenuOpen\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 scrolled\cf6 \strokec6 ,\cf4 \strokec4  setScrolled\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 lang\cf6 \strokec6 ,\cf4 \strokec4  setLang\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 'en'\cf6 \strokec6 );\cf4 \strokec4  \cf8 \strokec8 // 'en' or 'he'\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  t \cf6 \strokec6 =\cf4 \strokec4  translations\cf6 \strokec6 [\cf4 \strokec4 lang\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  isRTL \cf6 \strokec6 =\cf4 \strokec4  lang \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'he'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  handleScroll \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setScrolled\cf6 \strokec6 (\cf4 \strokec4 window\cf6 \strokec6 .\cf4 \strokec4 scrollY \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 50\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     window\cf6 \strokec6 .\cf4 \strokec4 addEventListener\cf6 \strokec6 (\cf7 \strokec7 'scroll'\cf6 \strokec6 ,\cf4 \strokec4  handleScroll\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  window\cf6 \strokec6 .\cf4 \strokec4 removeEventListener\cf6 \strokec6 (\cf7 \strokec7 'scroll'\cf6 \strokec6 ,\cf4 \strokec4  handleScroll\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 []);\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  toggleLang \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     setLang\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  prev \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'en'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'he'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'en'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setIsMenuOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  mentors \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3     \cf7 \strokec7 "Noa Buchman"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Zevi Arnovitz"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Roi Bnaya"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Omri Achituv"\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3     \cf7 \strokec7 "Omer Sella"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Michael Gasis"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Kfir Alfandary"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "Igor Linkov"\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 "May Kremer"\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `font-sans text-gray-900 bg-white min-h-screen \cf6 \strokec6 $\{\cf4 \strokec4 isRTL \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'text-right'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-left'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4  dir\cf6 \strokec6 =\{\cf4 \strokec4 isRTL \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'rtl'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'ltr'\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Navigation */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 nav className\cf6 \strokec6 =\{\cf7 \strokec7 `fixed w-full z-50 transition-all duration-300 \cf6 \strokec6 $\{\cf4 \strokec4 scrolled \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-white/95 backdrop-blur-sm shadow-md py-3'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-transparent py-5'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-between items-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf5 \strokec5 Logo\cf4 \strokec4  />\cb1 \
\cb3             \cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "hidden md:flex items-center space-x-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  href\cf6 \strokec6 =\cf7 \strokec7 "#about"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  href\cf6 \strokec6 =\cf7 \strokec7 "#current-projects"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  href\cf6 \strokec6 =\cf7 \strokec7 "#portfolio"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 portfolio\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  href\cf6 \strokec6 =\cf7 \strokec7 "#team"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cb1 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-4 border-l border-gray-200 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                   onClick\cf6 \strokec6 =\{\cf4 \strokec4 toggleLang\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                   className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-[#2A9D8F] transition-colors"\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf5 \strokec5 Globe\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 18\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 span\cf6 \strokec6 >\{\cf4 \strokec4 lang \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'en'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'HE'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'EN'\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 a href\cf6 \strokec6 =\cf7 \strokec7 "#contact"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "px-5 py-2.5 bg-[#2A9D8F] hover:bg-[#21867a] text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 contact\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 a\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "md:hidden flex items-center gap-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                 onClick\cf6 \strokec6 =\{\cf4 \strokec4 toggleLang\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-1 text-sm font-bold text-[#2A9D8F]"\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 lang \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 'en'\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'HE'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'EN'\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsMenuOpen\cf6 \strokec6 (!\cf4 \strokec4 isMenuOpen\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-600"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 isMenuOpen \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 X\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 24\cf6 \strokec6 \}\cf4 \strokec4  /> \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Menu\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 24\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 isMenuOpen \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col py-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  mobile href\cf6 \strokec6 =\cf7 \strokec7 "#about"\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsMenuOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 )\}>\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  mobile href\cf6 \strokec6 =\cf7 \strokec7 "#current-projects"\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsMenuOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 )\}>\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  mobile href\cf6 \strokec6 =\cf7 \strokec7 "#portfolio"\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsMenuOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 )\}>\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 portfolio\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 NavLink\cf4 \strokec4  mobile href\cf6 \strokec6 =\cf7 \strokec7 "#team"\cf4 \strokec4  onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsMenuOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 )\}>\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 nav\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 \}</\cf5 \strokec5 NavLink\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 nav\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Hero Section */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 section className\cf6 \strokec6 =\cf7 \strokec7 "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 rtl:left-0 rtl:right-auto rtl:-ml-20"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 rtl:right-0 rtl:left-auto rtl:-mr-20"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center max-w-3xl mx-auto"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "w-2 h-2 rounded-full bg-[#2A9D8F]"\cf4 \strokec4 ></span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-semibold text-gray-600 uppercase tracking-wide"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 hero\cf6 \strokec6 .\cf4 \strokec4 tag\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 hero\cf6 \strokec6 .\cf4 \strokec4 titleStart\cf6 \strokec6 \}\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-[#2A9D8F]"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 hero\cf6 \strokec6 .\cf4 \strokec4 titleHighlight\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >.\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-xl text-gray-600 mb-10 leading-relaxed"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 hero\cf6 \strokec6 .\cf4 \strokec4 subtitle\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col sm:flex-row justify-center gap-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 a href\cf6 \strokec6 =\cf7 \strokec7 "#portfolio"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "px-8 py-3.5 bg-[#2A9D8F] hover:bg-[#21867a] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 hero\cf6 \strokec6 .\cf4 \strokec4 ctaPortfolio\cf6 \strokec6 \}\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 isRTL \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 ArrowLeft\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 18\cf6 \strokec6 \}\cf4 \strokec4  /> \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 ArrowRight\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 18\cf6 \strokec6 \}\cf4 \strokec4  />\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 a\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 a href\cf6 \strokec6 =\cf7 \strokec7 "#about"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 hero\cf6 \strokec6 .\cf4 \strokec4 ctaLearn\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 a\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 section\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* About Section */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 section id\cf6 \strokec6 =\cf7 \strokec7 "about"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "py-20 bg-white"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid lg:grid-cols-2 gap-16 items-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 SectionHeading\cf4 \strokec4  subtitle\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 .\cf4 \strokec4 subtitle\cf6 \strokec6 \}\cf4 \strokec4  title\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \strokec4  align\cf6 \strokec6 =\cf7 \strokec7 "left"\cf4 \strokec4  lang\cf6 \strokec6 =\{\cf4 \strokec4 lang\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-600 text-lg mb-6 leading-relaxed"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 .\cf4 \strokec4 p1\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-600 text-lg mb-6 leading-relaxed"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 .\cf4 \strokec4 p2\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-600 text-lg mb-8 leading-relaxed"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 .\cf4 \strokec4 p3\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "relative"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute inset-0 bg-[#2A9D8F] rounded-2xl rotate-3 opacity-10"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl aspect-video flex items-center justify-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center p-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Code\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 48\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "mx-auto text-gray-400 mb-4"\cf4 \strokec4  />\cb1 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-500"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 about\cf6 \strokec6 .\cf4 \strokec4 ceremony\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 section\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Current Projects Placeholder */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 section id\cf6 \strokec6 =\cf7 \strokec7 "current-projects"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "py-20 bg-teal-50"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf5 \strokec5 SectionHeading\cf4 \strokec4  subtitle\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 .\cf4 \strokec4 subtitle\cf6 \strokec6 \}\cf4 \strokec4  title\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \strokec4  lang\cf6 \strokec6 =\{\cf4 \strokec4 lang\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3           \cb1 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-teal-100 relative overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `absolute top-0 -mt-10 w-40 h-40 bg-teal-50 rounded-full blur-2xl \cf6 \strokec6 $\{\cf4 \strokec4 isRTL \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'left-0 -ml-10'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'right-0 -mr-10'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "relative z-10"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-center mb-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-4 bg-teal-100 text-[#2A9D8F] rounded-full"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf5 \strokec5 Rocket\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 40\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-bold text-gray-900 mb-4"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 .\cf4 \strokec4 cardTitle\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-600 text-lg mb-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 .\cf4 \strokec4 cardDesc\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "inline-flex items-center gap-2 text-[#2A9D8F] font-semibold bg-teal-50 px-6 py-3 rounded-full"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf5 \strokec5 Sparkles\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 18\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 span\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 current\cf6 \strokec6 .\cf4 \strokec4 reveal\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 section\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Portfolio Section (All Past Projects) */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 section id\cf6 \strokec6 =\cf7 \strokec7 "portfolio"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "py-20 bg-white"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf5 \strokec5 SectionHeading\cf4 \strokec4  subtitle\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 portfolio\cf6 \strokec6 .\cf4 \strokec4 subtitle\cf6 \strokec6 \}\cf4 \strokec4  title\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 portfolio\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \strokec4  lang\cf6 \strokec6 =\{\cf4 \strokec4 lang\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3           \cb1 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid md:grid-cols-2 lg:grid-cols-3 gap-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 projectsData\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 project\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 ProjectCard\cf4 \strokec4  key\cf6 \strokec6 =\{\cf4 \strokec4 idx\cf6 \strokec6 \}\cf4 \strokec4  project\cf6 \strokec6 =\{\cf4 \strokec4 project\cf6 \strokec6 \}\cf4 \strokec4  lang\cf6 \strokec6 =\{\cf4 \strokec4 lang\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 section\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Team Section */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 section id\cf6 \strokec6 =\cf7 \strokec7 "team"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "py-20 bg-white border-t border-gray-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf5 \strokec5 SectionHeading\cf4 \strokec4  subtitle\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 subtitle\cf6 \strokec6 \}\cf4 \strokec4  title\cf6 \strokec6 =\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \strokec4  lang\cf6 \strokec6 =\{\cf4 \strokec4 lang\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3           \cb1 \
\cb3           \cf6 \strokec6 \{\cf8 \strokec8 /* Current Managers */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 managersData\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 manager\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 LeadershipCard\cf4 \strokec4  \cb1 \
\cb3                 key\cf6 \strokec6 =\{\cf4 \strokec4 idx\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                 name\cf6 \strokec6 =\{\cf4 \strokec4 manager\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 [\cf4 \strokec4 lang\cf6 \strokec6 ]\}\cf4 \strokec4  \cb1 \
\cb3                 title\cf6 \strokec6 =\{\cf4 \strokec4 manager\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 [\cf4 \strokec4 lang\cf6 \strokec6 ]\}\cf4 \strokec4  \cb1 \
\cb3                 image\cf6 \strokec6 =\{\cf4 \strokec4 manager\cf6 \strokec6 .\cf4 \strokec4 image\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3               />\cb1 \
\cb3             \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3           \cf6 \strokec6 \{\cf8 \strokec8 /* Mentors / Past Team */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm text-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-bold text-gray-900 mb-2"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 mentorsTitle\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-600 mb-8 max-w-2xl mx-auto"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 mentorsDesc\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-wrap justify-center gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 mentors\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 mentor\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 span key\cf6 \strokec6 =\{\cf4 \strokec4 idx\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:bg-[#2A9D8F] hover:text-white hover:border-[#2A9D8F] transition-colors cursor-default shadow-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 \{\cf4 \strokec4 mentor\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mt-12 pt-12 border-t border-slate-200"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 <\cf4 \strokec4 h4 className\cf6 \strokec6 =\cf7 \strokec7 "text-lg font-semibold text-gray-400 mb-4"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 pastManagersTitle\cf6 \strokec6 \}</\cf4 \strokec4 h4\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-500 text-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 team\cf6 \strokec6 .\cf4 \strokec4 pastManagersList\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 section\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Footer */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 footer id\cf6 \strokec6 =\cf7 \strokec7 "contact"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "bg-slate-900 text-slate-400 py-12 border-t border-slate-800"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col md:flex-row justify-between items-center gap-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `text-center \cf6 \strokec6 $\{\cf4 \strokec4 isRTL \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'md:text-right'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'md:text-left'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center justify-center \cf6 \strokec6 $\{\cf4 \strokec4 isRTL \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'md:justify-start'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'md:justify-start'\cf6 \strokec6 \}\cf7 \strokec7  gap-2 mb-2`\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf5 \strokec5 Globe\cf4 \strokec4  size\cf6 \strokec6 =\{\cf9 \strokec9 20\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-[#2A9D8F]"\cf4 \strokec4  />\cb1 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-white font-bold text-lg"\cf6 \strokec6 >\cf5 \strokec5 Code4Good\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 footer\cf6 \strokec6 .\cf4 \strokec4 uni\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm mt-1"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 footer\cf6 \strokec6 .\cf4 \strokec4 est\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `text-center \cf6 \strokec6 $\{\cf4 \strokec4 isRTL \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'md:text-left'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'md:text-right'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm"\cf4 \strokec4 >&copy\cf6 \strokec6 ;\cf4 \strokec4  \cf6 \strokec6 \{\cf2 \strokec2 new\cf4 \strokec4  \cf5 \strokec5 Date\cf6 \strokec6 ().\cf4 \strokec4 getFullYear\cf6 \strokec6 ()\}\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 footer\cf6 \strokec6 .\cf4 \strokec4 rights\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-xs mt-2"\cf6 \strokec6 >\{\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 footer\cf6 \strokec6 .\cf4 \strokec4 built\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 footer\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
}