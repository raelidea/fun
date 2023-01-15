import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { rust } from "@codemirror/lang-rust";
import { basicSetup } from "codemirror";

let updateListenerExtension = EditorView.updateListener.of(function (update) {
  if (update.docChanged) {
    // Handle the event her
    //   debugger
    // console.log(`doc changed ${update.state.doc.toString()}`);
    // diagnosView.state.doc.setValue(update.state.doc.toString())
    var result = rael.compile(update.state.doc.toString());
    if (result.error) {
      diagnosView.setState(EditorState.create({ doc: result.error }));
      outputView.setState(EditorState.create({ doc: `` }));
    } else {
      outputView.setState(EditorState.create({ doc: result.code }));
      diagnosView.setState({ doc: `No errors found` });
    }
  }
});

let inputState = EditorState.create({
  doc: `fn main() : unit {
    fn fib (n) {
      match n {
      | 0 | 1 =>  1 
      | _ => fib(n-1) + fib(n-2)    
      }
    }
    output_int(fib(3))
  }  
}`,
  extensions: [
    keymap.of(defaultKeymap),
    basicSetup,
    rust(),
    updateListenerExtension,
  ],
});

var inputView = new EditorView({
  state: inputState,
  parent: document.querySelector("#input-editor"),
});

// inputView.state.updateListener.add((update) => {})
var outputView = new EditorView({
  state: EditorState.create({
    doc: ``,
  }),
  parent: document.querySelector("#input-editor"),
});

var diagnosView = new EditorView({
  state: EditorState.create({
    doc: `No errors found`,
  }),
  parent: document.querySelector("#error-editor"),
});
