Explore 4 ways to add Conditional Rendering in React
i.	Eta hole oita dekhaw, na hoile onno kichu dekhaw
  // Conditional rendering options
  // 1. Element variable
  //   2. ternary operator condition ? true : false
  //   3. and Operator(shorthand)(&&) => true hole ekta jinis dekhaba
  //   4. or operator(&&) => false hole ekta jinis dekhaba


54-6 Prop Drilling to pass data to a many level components
Prop drilling: grandpa – falther – myself – special
54-7 Simple Introduction to Context API to avoid Prop drilling
i.	Context declare kora & export kora
ii.	Joto gula k share krte chaw segula k provider er vitor e dhukay dite hobe
iii.	Then oitar moddhe value set kore diba, oi value sobai pabe
 1. call createContext with a defalut value 
 2. set a variable of the context with uppercase
 3. Make sure you export the context to use it in other places
 4. Warp you child content using RingCOntext.Provider
 5. Provide a vlaue
 6. to consume the context from child component
 7. useContext hook and you eill need to pass the contextName
 8. Make sure you take notes...

54-9 Deploy react router project and fix router reload issue
So to fix the issue, we need to create a file named _redirects to the root of our site [public folder of App] with the following content.
/* /index.html 200

