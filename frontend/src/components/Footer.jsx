
export default function Footer() {
    
    return (
        <div style={{padding: "12px 0px",background: "white", textAlign: 'center', position:'fixed', width: '100%',height : '80px', bottom : '0', left: '0', right: '0', zIndex : '999'}}>
            
            <div className="text-center">
                    <h5>
                        Made with ❤️ by  <a style={{textDecoration : "none", color: "red"}}>RagaviKannan
                    <i style={{fontSize : "21px"}}></i>
                </a>
                    </h5>
                    <div className="text-center pt-1">
                 <a href="mailto:ragavikannan41102@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{fontSize : "21px"}}></i>
                </a>
                <a href="https://github.com/RagaviKannan04" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>
                <a href="https://www.linkedin.com/in/ragavi-gokul-61907b2a3/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                </a>
            </div>
            </div> 
             
            {/* <footer style={{backgroundColor: 'crimson', color:'springgreen', textAlign: 'center', position:'fixed', width: '100%',height : '50px', bottom : '0', left: '0', right: '0', zIndex : '999'}}><h1>THIS IS MY FOOTER</h1></footer> */}
        </div>
       
    )
}
