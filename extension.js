var vscode = require('vscode');
var sb = null;


function CreateStatusBar() {
  var config = vscode.workspace.getConfiguration('StatusBarTag');
  var sb = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left,0);
  sb.text = config.text;
  sb.show();
  return sb;
}


function onStatusBarChange() {
  var config = vscode.workspace.getConfiguration('StatusBarTag');
  if(config.enable){
    sb.text = config.text;
    sb.show();
  }else{
    sb.hide();
  }
  
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  var config = vscode.workspace.getConfiguration('StatusBarTag');
  if(config.enable){
    sb = CreateStatusBar();
    vscode.workspace.onDidChangeConfiguration(onStatusBarChange);
    context.subscriptions.push(sb);
  }
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;