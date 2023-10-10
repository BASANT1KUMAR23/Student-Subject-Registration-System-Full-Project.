import React, { Component } from 'react'

 class HeaderComponent extends Component {
     constructor(props){
         super(props)

         this.state={

         }
     }
   
    
    render (){
        return (
            <div >
                <header >
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-top">
                        <div><a href="http://courseware.cutm.ac.in/" className="navbar-brand">Cutm Syllabus</a></div>

                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent