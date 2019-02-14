import React, { Component } from 'react';
import './App.css';




class App extends Component {

  // state data
  data = {
    msg: ' Hello React  <a href="#" class="badge badge-dark" onclick=alert(1)>clickme</a> ',
    rawjs: 'alert(1)',
    url: 'javascript:alert(1)',
    evt: 'alert(1)',
    raw: '{msg}',
    sample: 'sample',
    sample1: 'sample',
    sample2: 'sample',
  }

  hover = () => {
    console.log('trigged');
    // return this.data.msg
  }

  render() {
    return (

      <div className = "container-fluid" >
        <br />

        <div className = "card" >
          <h5 className = "card-header" > HTML and Javascript Injection </h5>
          <div className = "card-body" >

            <div>
              <h6 class="card-subtitle mb-2 text-muted">Default Render</h6>
              <span className = "badge badge-primary" > {this.data.raw} 
              </span> -> <span className="badge badge-success"> Safe </span>

              <div>
              {this.data.msg}
              </div>
            </div>
            <hr />

            <div>
              <h6 class="card-subtitle mb-2 text-muted">dangerous Render</h6>
              <span className = "badge badge-primary" > {
                "<div dangerouslySetInnerHTML = {{__html: this.data.msg }}"
              } </span> -> <span className="badge badge-danger"> UnSafe </span>

              <div dangerouslySetInnerHTML = {{__html: this.data.msg}} />

            </div>
          </div>
        </div>

        <br />

        <div className="card" >
          <h5 className="card-header" > Attribute and Event Injection </h5>
          <div className="card-body" >

            <div>
              <h6 class="card-subtitle mb-2 text-muted">Attribute Default Render</h6>
              <span className="badge badge-primary" > {this.data.url}
              </span> -> <span className="badge badge-danger"> Unsafe </span>

              <div>
                <a className="badge badge-dark"  href={this.data.url}>clickme</a>
                
              </div>
            </div>
            <hr />

            <div>
              <h6 class="card-subtitle mb-2 text-muted">Event Default Render</h6>
              <span className="badge badge-primary" > 
              {"onmouseover=" + this.data.evt } </span> -> <span className="badge badge-success"> Safe </span>

              <div>
              <a className="badge badge-secondary" onClick="console.log(1)" onMouseOver={this.data.evt}> hoverme </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
