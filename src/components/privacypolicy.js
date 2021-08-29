import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
    render() {
        return (
            <div className="App" style={{marginTop:"50px"}}>
                <h2>Privacy policy</h2>
                <CKEditor 
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        
                    } }
                    
                    
                    // onChange={ ( event, editor ) => {
                    //     const data = editor.getData();
                    //     console.log( { event, editor, data } );
                    // } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.', editor );
                    // } } 
                    
                />
                <div class="row" style={{marginTop:"20px"}}>
                        <div class="col-xs-12 col-md-3">
                            <a href="" class="btn btn-danger btn-block">Cancel</a>
                        </div>
                        <div class="col-xs-12 col-md-3 offset-md-6">
                            <button type="submit" class="btn btn-primary btn-block">Update</button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default App;
