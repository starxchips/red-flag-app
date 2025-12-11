export type Behavior = {
    id: number;
    title: string;
    category: "emotional" | "manipulation" | "control" | "volatile";
    points: number;
  };
  
  // Assign REAL point values to each sign
  export const behaviors: Behavior[] = [
    { id: 1, title: "Love bombing in early stages", category: "manipulation", points: 3 },
    { id: 2, title: "Isolating from friends and family", category: "control", points: 4 },
    { id: 3, title: "Gaslighting your reality", category: "manipulation", points: 5 },
    { id: 4, title: "Controlling finances entirely", category: "control", points: 4 },
    { id: 5, title: "Constant criticism disguised as jokes", category: "emotional", points: 3 },
    { id: 6, title: "Refusing to take accountability", category: "emotional", points: 2 },
    { id: 7, title: "Monitoring your location constantly", category: "control", points: 4 },
    { id: 8, title: "Dismissing your feelings", category: "emotional", points: 3 },
    { id: 9, title: "Making you feel guilty for boundaries", category: "manipulation", points: 3 },
    { id: 10, title: "Hot and cold behavior patterns", category: "emotional", points: 3 },
    { id: 11, title: "Explosive anger over small things", category: "volatile", points: 5 },
    { id: 12, title: "Jealousy masquerading as love", category: "control", points: 3 },
  ];
  