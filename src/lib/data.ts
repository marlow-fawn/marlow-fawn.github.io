export const personalInfo = {
  name: "Marlow Fawn",
  location: "Somerville, MA, US",
  email: "marlow.fawn@gmail.com",
  github: "https://github.com/marlow-fawn",
  linkedin: "https://www.linkedin.com/in/marlow-fawn-6937ba176/",
};
export const workExperience = [
  {
    "company": "Tufts Human Robotics Interaction Lab",
    "location": "Medford, MA",
    "position": "Staff Research Engineer",
    "period": "Feb 2023 -- Present",
    "achievements": [
      "Led full stack AI development across diverse robotics platforms (delivery, pick-and-place, and vision-based systems) via engineering robust packages for cognitive architectures to unify multidisciplinary research efforts.",
      "Pioneered initiatives in object-based RL, MCTS for adversarial/collaborative symbolic planning, and formal safety for RL policies via STL and CLBFs; investigated normative reasoning and agent migration’s impact on trust.",
      "Managed cross-functional teams and mentored students on full stack systems, from experiment design to low level robot integration."
    ]
  },
  {
    "company": "Thinking Robots Inc.",
    "location": "Boston, MA",
    "position": "Software Engineer",
    "period": "Dec 2019 -- Jan 2023",
    "achievements": [
      "Integrated natural language processing with reasoning systems to enable intuitive robot programming in manufacturing, supporting multi-agent pick-and-place and delivery operations.",
      "Developed and maintained continuous integration pipelines and comprehensive testing frameworks to ensure robust software delivery.",
      "Implemented a robot-agnostic design philosophy, allowing seamless interoperability and hot-swapping between robots with varying degrees of freedom and resources."
    ]
  },
  {
    "company": "Tufts HRI Lab",
    "location": "Medford, MA",
    "position": "Researcher",
    "period": "Jun 2017 – Aug 2017, Jun 2019 – Nov 2019, Jan 2021 – Apr 2021",
    "achievements": [
      "Managed embodied hybrid cognitive architectures focusing on symbolic planning, novelties, and RL."
    ]
  },
  {
    "company": "Sustainable Electrochemical Energy Lab",
    "location": "Medford, MA",
    "position": "Researcher",
    "period": "Sep 2017 -- Jun 2018",
    "achievements": [
      "Designed and conducted experiments on efficiency in hydrogen fuel cell research."
    ]
  },
  {
    "company": "Superconductivity and Fusion Research Lab",
    "location": "Medford, MA",
    "position": "Researcher",
    "period": "Sep 2017 -- May 2018",
    "achievements": [
      "Designed and analyzed finite element models for superconducting materials under torsional loads."
    ]
  }
];


export const education = [
  {
    institution: "Tufts University",
    location: "Medford, MA, USA",
    degree: "B.S. Mechanical Engineering",
    period: "Sep 2015 - May 2019",
    achievements: [
      "todo",
    ],
  },
  {
    institution: "Tufts University",
    location: "Medford, MA, USA",
    degree: "M.S. Computer Science: Human Robot Interaction",
    period: "Feb 2023 -  Aug 2025 (anticipated)",
    achievements: [
      "todo",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Python",
    "Java",
    "C/C++/C#",
    "JavaScript/Typescript",
    "Bash",
    "MATLAB",
    "Nix"
  ],
  roboticsAndAI: [
    "ROS/ROS2",
    "PyBullet",
    "Reinforcement Learning",
    "Machine Learning",
    "Symbolic Planning",
    "Classical Planning",
    "Machine Vision",
    "Robosuite"
  ],
  engineering: [
    "CAD",
    "Finite Element Analysis",
    "CNC Machining",
    "LabVIEW",
    "3D printing",
    "Rapid Prototyping"
  ],
  misc: [
    "Music Composition & Production",
    "Fiber Arts"
  ]
};


export const projects = [
  {
    title: "Self-Hosted Server and Mesh",
    description: [
      "Self hosted, configured, and maintained Raspberry Pi 5-based server.",
      "Focused on security through a self hosted headscale network.",
      "Private access to a variety of services such as photo galleries, media players, secure file servers, and more."
    ],
  },
  {
    title: "Reach-Avoid RL on Low-Compute Devices",
    description: [
      "Training and running a reach-avoid policy for a simple differential drive robot (the XRP), which runs on a Pi Pico.",
      "Involves the full stack of modeling the robot as a URDF, training it in Pybullet via dense curriculum learning, and then converting via TensorFlow Lite Micro for quantization and memory management.",
      "The goal is to have a successful deployment of a policy on a device with very limited memory, robust enough to work without any sim-to-real transfer learning."
    ],
  },
  {
    title: "Object-Based Reinforcement Learning",
    // github: "Coming soon",
    description: [
      "Trained a reach-avoid policy in simulation that learns the forces necessary to manipulate an object, rather than a policy in joint space.",
      "The goal was to allow the manipulation of the policy output (force vectors) for integration with symbolic or analytical approaches to safety."
    ],
  },
  {
    title: "Provably Safe STL+RL Integration using CLBFs",
    // github: "Coming soon",
    description: [
      "Integration of reinforcement learning, physics, natural language, and symbolic approaches.",
      "Provides a robust platform for on-the-fly compositions of simple RL models."
    ],
  },
  {
    title: "Agent Migration Effects on Trust",
    // github: "Coming soon",
    description: [
      "Between-subjects HRI experiment involving a collaborative human-robot sorting task.",
      "User preferences were transferred to a homeomorphic agent mid-experiment",
      "Evaluated effects on task efficacy, user perception, and trust."
    ],
  },
  {
    title: "Robust Python to Java Communication for Cognitive Architectures",
    // github: "Coming soon",
    description: [
      "Developed middleware communciation for a cognitive architecture to allow integration of Java and Python libraries.",
      "Opened the doors for Lang Graph, RL, and simulation envrionments into a robust symbolic AI system."
    ],
  },
  {
    title: "Flexible Collaborative/Adversarial MCTS & Classical Planning",
    // github: "Coming soon",
    description: [
      "Integrated classical planning with MCTS for robust handling of novelties.",
      "In an environment where plan execution fails, MCTS was used along with agent evaluations to allow the planning agent to optimize future actions for task completion.",
      "Able to optimize against different agent types, including both advesarial and collaborative agents."
    ],
  },

  {
    title: "Tetherbot",
    // github: "Coming soon",
    description: [
      "Full hardware, electrical, and software stack for Tetherbot, a mobile base with a flexible 120V payload (e.g. UV sterilization lamp).",
      "Automated SLAM and fiducial-based custom docking mechanism",
      "User-friendly natural language interactions to allo for 24/7 operation in hospital environments."
    ],
  },
  {
    title: "Music",
    // github: "Coming soon",
    description: [
      "Written and produced three albums.",
      "Incorporates traditional and experimental instruments and compositions."
    ],
  },

  // {
  //   title: "Net Zero Carbon Emissions",
  //   github: "https://github.com/rishikesh2003/Prodigi",
  //   description: [
  //     "WiFi-RTT: Developed indoor occupancy tracking for energy optimization.",
  //     "IoT Solutions: Implemented smart monitoring for energy efficiency and food waste reduction.",
  //     "Real-Time Tracking: Designed systems to monitor carbon emissions and optimize resources.",
  //     "Data-Driven Insights: Analyzed user patterns for adaptive energy and food management.",
  //     "Reward Integration: Built QR-based amber points system to incentivize eco-friendly actions.",
  //   ],
  // },
  // {
  //   title: "Mental Aarog",
  //   github: "https://github.com/rishikesh2003/mental-aarog",
  //   description: [
  //     "A holistic mental health app leveraging AI and blockchain for early detection and personalized solutions for depression.",
  //     "Features include social media analysis (ML-based sentiment tracking), PHQ-9 assessments, smartwatch integration for sleep and activity data, guided meditation, and smart suggestions for food, travel, music, and movies.",
  //     "Developed a rewards system using MAG crypto token on Ethereum, enabling user engagement through in-app incentives.",
  //     "Secure storage implemented via web3.storage, IPFS, and FileCoin.",
  //     "Built with React, Supabase, Node.js, Flask, and Solidity, showcasing seamless integration of health tech and blockchain.",
  //   ],
  // },
];
