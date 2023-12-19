    // const heading= React.createElement("h1",    //returns an object --- React.createElement
    // {id: "heading"},
    // "Hello worlllldddddddddd");
    // console.log(heading);
    // const root= ReactDOM.createRoot(document.getElementById('root'));  

    // root.render(heading);

    //creating nested elements...
    /**
     * <div id="parent">
     *      <div id="child">
     *         <h1>Hello iam child1</h1>   //creating array of objects for multiple children
     *         <h2>Hello iam child2</h2>
     *       </div>
     *       <div id="child">
     *         <h1>Hello iam child1</h1>   //creating array of objects for multiple children
     *         <h2>Hello iam child2</h2>
     *       </div>
     * </div>
     */

    const parent = React.createElement("div",
    {id: "parent"},
    [
        React.createElement("div",
        {id : "child"},[
        React.createElement("h1",{},"Hello iam child1"),
        React.createElement("h2",{},"Hello iam child2")
        ]),
        [
            React.createElement("div",
            {id : "child"},[
            React.createElement("h1",{},"Hello iam child1"),
            React.createElement("h2",{},"Hello iam child2")
            ])
        ]

    ]
)
const root= ReactDOM.createRoot(document.getElementById('root'));  

    root.render(parent);
