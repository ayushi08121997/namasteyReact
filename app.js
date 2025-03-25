const parent = React.createElement("div",{id : "parent"},
    React.createElement("div",{id:"child"},
       React.createElement("h1",null,"I am an h1 tag!!")
    )
);
// const heading = React.createElement("h1",
// { 
//     id : "heading"
// },"hello world!!");
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);