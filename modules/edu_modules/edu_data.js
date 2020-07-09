////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//POSITIONS ARRAY
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export const positions = [
    {// THIS CEO CONTENT WAS TAKEN FROM: https://work.chron.com/duties-county-executive-23759.html#:~:text=County%20executives%20manage%20and%20supervise,and%20effectiveness%20of%20county%20government.
        id:0,
        name: "ceo",
        title:"County CEO",//the first sentence of the description below came from wikipedia
        description: "A County Executive is the head of the executive branch of government in a United States county. County executives manage and supervise the county’s departments and agencies and all county services, programs and projects. Duties include setting policy, standards, goals and objectives and directing the managers of county departments and agencies."
        ,//ideally this comes from an API call to vote411 or e.the.people
        facts: [//what kind of background the person who takes this position has, what they get paid, retirement package they receive, etc.
            "County executives organize and lead staff meetings and appoint, hire, terminate and discipline county management personnel.",
            //the fact below was written by me:
            "One way to interact directly with your county's CEO is through public Board meetings. Phone, email, and being elected to your county council are other ways interface with the CEO directly. \n \n For more information on Dekalb County Board meetings <a href='https://www.dekalbcountyga.gov/board-commissioners/meetings'>click here</a>.",
            "When the county council makes a decision, it turns to the county executive, who must take any necessary steps to carry out the wishes of the council. The council may direct the county executive through consensus or via the passage of an ordinance or resolution. \n \n For example, the council might vote to reallocate a portion of the parks and rec budget to the sheriff’s office. The county executive would inform the accounting department of the decision and would ensure that the funds are reallocated.",
            "The average salary of a county executive in 2020 is $68,521 a year, according to ZipRecruiter. Salaries range from as low as $19,500 a year to a high of $135,000 annually.",
            //the fact below was written by me:
            "The CEO can either be appointed or elected. In Dekalb County, GA, the CEO is elected every four years, and can serve for a maximum of two terms.\n \nFor more information on the history of Dekalb County CEOs <a href='https://www.google.com/search?q=dekalb+county+ceo+history&rlz=1C5CHFA_enUS903US905&oq=dekalb+county+ceo+hist&aqs=chrome.0.0j69i57.9513j0j4&sourceid=chrome&ie=UTF-8'>click here</a>."
        ],
        //EVENTUALLY: add a history section people can read - or maybe just display a link to a google search of "${your location} ${positions[j].title} history"
        quizQ: [
            "CEO is the head of which branch of government in a county?",
            "Which of the following is not a duty of a county CEO?",
            "Which of the following is not a way to communicate with your county CEO?",
            "The average salary of a County CEO is: ",
            "The CEO can be appointed in some counties.",
        ],
        quizAnswerValues: [
            [
                "Legislative",
                "correct",
                "Judicial",
                "Existential"
            ],
            [
                "appoint",
                "policy",
                "enforce",
                "correct"
            ],
            [
                "correct",
                "getElected",
                "meetings",
                "phone"
            ],
            [
                "correct",
                "~$19,500",
                "~$135,000",
                "~$400,000"
            ],
            [
                "correct",
                "false"
            ]
        ],
        quizAnswerText: [
            [
                "Legislative",
                "Executive",//correct
                "Judicial",
                "Existential"
            ],
            [
                "Appoint, hire, and terminate county management personnel",
                "Set policy",
                "Enforce county council or commission decisions",
                "Process all county taxes"//correct
            ],
            [
                "Abstaining from voting",//correct
                "Running for and being elected as a board member of your county's council/commission",
                "Attending regularly scheduled public meetings",
                "Phone and email"
            ],
            [
                "~$68,000",//correct
                "~$19,500",
                "~$135,000",
                "~$400,000"
            ],
            [
                "True",//correct
                "False"
            ]
        ],
        points: 0,
        counter: 0
    },
    {
        id:1,
        name: "sheriff",
        title:"Sheriff",
        //All this content came from Wikipedia
        description:"In Georgia, sheriffs are elected, and serve as police chief of each county, though some lead their own independent agencies with limited law enforcement duties as well. Sheriffs are also responsible for managing county jails and security at local government buildings.",
        facts: [
            "In addition to law enforcement, sheriffs or their deputies execute and return all processes and orders of the courts; receive, transport, and maintain custody of incarcerated individuals for court; attend the place or places of holding elections; keep all courthouses, jails, public grounds, and other county property; maintain a register of all precious-metal dealers; enforce the collection of taxes that may be due to the state; as well as numerous other duties.",
            "All law enforcement officers in Georgia have statewide jurisdiction if the crime happens in their immediate presence, but sheriffs have statewide jurisdiction also if the crime originated in their county. This means if someone breaks the law in one county and flees to another the sheriff can go anywhere inside the state to investigate the crime, make the arrest, and transport the accused back to the original county.",
            "The sheriff has as much authority within municipalities as in unincorporated areas of his county.",
            "The median salary of a sheriff in the U.S. is $108,862.",
            "There is no limit to how many terms a sheriff may serve."
        ],
        quizQ: [
            "Sheriffs are responsible for all of the following except:",
            "Additional duties of Sheriffs include:",
            "Which of the following is not a unique characteristic of the Sheriff's authority?",
            "The average salary of a sheriff in the U.S. is:",
            "A sheriff in Georgia may serve for:"
        ],
        quizAnswerValues: [
            [
                "jails",
                "correct",
                "security",
                "precious-metal"
            ],
            [
                "transport",
                "enforce",
                "attend",
                "correct"
            ],
            [
                "correct",
                "statewideJurisdiction",
                "city/jurisdiction",
                "allOfAbove"
            ],
            [
                "~$100,000",
                "~$68,000",
                "correct",
                "noneOfAbove"
            ],
            [
                "twoFour",
                "twoTwo",
                "twoSix",
                "correct"
            ]
        ],
        quizAnswerText: [
            [
                "Managing county jails",
                "Respresenting community members at forums with county councilmembers",//correct
                "Security for government buildings",
                "Maintain a register of all precious-metal dealers"
            ],
            [
                "Transport and maintain custody of incarcerated indivduals",
                "Enforce the collection of taxes due to the state",
                "Attend the place or places of held elections",
                "All of the above"//correct
            ],
            [
                "Statewide jurisdiction if the crime happens in their immediate presence",//correct
                "Statewide jurisdiction if the crime happens in their county",
                "Jurisdiction in cities/municipalities within their county",
                "All of the above are unique to Sheriffs"
            ],
            [
                "~$100,000",
                "~$68,000",
                "~$108,000",//correct
                "None of the above"
            ],
            [
                "Two four-year terms",
                "Two two-year terms",
                "Two six-year terms",
                "An unlimited number of terms"//correct
            ]
        ],
        points: 0,
        counter: 0
    },
    {
        id:2,
        name: "boe",
        title: "Board of Education",
        //This content taken from: https://www.noodle.com/articles/what-does-a-school-board-do-a-brief-guide-for-parents
        description: "Just as a Chief Executive Officer (CEO) oversees a company, a superintendent supervises a school district. Contrary to what many may believe, however, neither the CEO nor the superintendent is at the top of the ladder. Instead, a company’s CEO is elected by and reports to a board of directors. Likewise, a school district’s superintendent is accountable to a school board, or a school committee.",
        facts: [
            "Some of the most important responsibilities the board holds include: Hiring and/or firing the superintendent, setting the yearly budget, approving contracts for teachers and outside vendors, establishing a vision for the district, expanding the district or closing schools",
            "New initiatives, educational goals, and large changes to the curriculum or budget all need to go through the school board.",
            "If a school wants to increase the budget by $10,000 to purchase new computers for classrooms, the school board has to approve the change. If the school board agrees, however, they could very well be agreeing on a tax increase, which may be looked upon negatively by the public.",
            "Annual salaries for board members range from $0 (in small districts) to $125,000 (in Los Angeles Unified School District. Less than 40 percent of large-district school board members work more than 40 hours per month on board-related duties in return for a salary.",
            "In Georgia, School Board members are elected, but in some districts elsewhere in the country are appointed by an education committee within the state legislature, the governor, or the mayor."
        ],
        quizQ: [
            "All of the following are duties of the School Board except:",
            "Additional responsibilities of School Board members include:",
            "The superintendent approves a change to a school's budget.",
            "All School Board officials work full-time in exchange for salaries",
            "Which of the following is NOT a way to become a School Board member?"
        ],
        quizAnswerValues: [
            [
                "Appointing the superintendent",
                "Setting the yearly budget",
                "Establishing a vision for the district",
                "correct"
            ],
            [
                "Approving contracts for teachers and outside vendors",
                "Expanding the district or closing schools",
                "Changing the curriculum",
                "correct"
            ],
            [
                "True",
                "correct",
                "",
                ""
            ],
            [
                "True",
                "correct",
                "",
                ""
            ],
            [
                "elected",
                "appointedCommittee",
                "correct",//correct
                "allOfAbove"
            ]
        ],
        quizAnswerText: [
            [
                "Appointing the superintendent",
                "Setting the yearly budget",
                "Establishing a vision for the district",
                "Developing and maintaining partnerships with corporate partners"//correct
            ],
            [
                "Approving contracts for teachers and outside vendors",
                "Expanding the district or closing schools",
                "Changing the curriculum",
                "All of the above are duties of the School Board"//correct
            ],
            [
                "True",
                "False",//correct
                "",
                ""
            ],
            [
                "True",
                "False",//correct
                "",
                ""
            ],
            [
                "Be elected",
                "Be appointed by a committee within the state legislature",
                "Be appointed by the president",//correct
                "All of the above are ways to become a Board of Education member"
            ]
        ],
        points: 0,
        counter: 0
    }
]

