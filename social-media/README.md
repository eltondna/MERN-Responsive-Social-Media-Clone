### Frontend Social Media Clone - Learning Key Point
## React-Router-DOM
1. Routing diff page

    1. Create router 
        const router = createBrowserRouter([
        {
            path: "/",
            element: (
            <ProtectedRoute>
                <Layout/>
            </ProtectedRoute>
            ),
        ...
        }
        ])

    2. Apply to app return statement
        return (
            <RouterProvider router={router} /> 
        );

2. <Outlet/> to create reusable page template 
    2.1: Create a page template layout 
    
    const Layout = ()=>{
            return (
                <div>
                <Navbar />
                <div style={{display: "flex"}}>
                    <Leftbar/>
                    <div style={{flex: 6 }}>
                    <Outlet/>
                    </div>
                    <Rightbar/>
                </div>
                </div>
            )
    }
    2.2: Apply the layout to router
        {
            path: "/",
            element: (
            <ProtectedRoute>
                <Layout/>
            </ProtectedRoute>
            ),
            children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "/profile/:id",
                element: <Profile/>
            }
            ]
        }  
    - The children tag specify pages apply to the layout 


## Frontend CSS design key point

# Box Shadowing - Google Box shadow generator

# -webkit: The -webkit prefix on CSS selectors are properties that only this engine is intended to process, very similar to -moz properties. Many of us are hoping this goes away, for example -webkit-border-radius will be replaced by the standard border-radius and you won't need multiple rules for the same thing for multiple browsers. This is really the result of "pre-specification" features that are intended to not interfere with the standard version when it comes about.

i.e. -webkit-scrollbar, -webkit-box-shadow 

# position: sticky 
- Allow certain element position always stick to their position i.e. on-scroll

# position: absolute
- When you want to make element position at certain place, you will use it.
- But at the same time you need to specify the parent element to be position relative !
- Example: Right bar online friends


