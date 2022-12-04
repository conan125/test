// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { Uri, commands } = require('vscode');
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "bs" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('bs.hahaha', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from bs!');
		vscode.window.setStatusBarMessage('你好，前端艺术家！');
		vscode.window.activeTextEditor.edit(editBuilder => {
			// 从开始到结束，全量替换
			const end = new vscode.Position(vscode.window.activeTextEditor.document.lineCount + 1, 0);
			const text = '新替换的内容';
			editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), text);
			const path = './somefile.txt';
			const options = {
				// 选中第3行第9列到第3行第17列
				selection: new vscode.Range(new vscode.Position(2, 8), new vscode.Position(2, 16)),
				// 是否预览，默认true，预览的意思是下次再打开文件是否会替换当前文件
				preview: false,
				// 显示在第二个编辑器
				viewColumn: vscode.ViewColumn.Two
			};
			vscode.window.showTextDocument(vscode.Uri.file(path), options);
			// 创建webview
			const panel = vscode.window.createWebviewPanel(
				'testWebview', // viewType
				"WebView演示", // 视图标题
				vscode.ViewColumn.One, // 显示在编辑器的哪个部位
				{
					enableScripts: true, // 启用JS，默认禁用
					retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
				}
			);
			panel.webview.html = `<html><body>你好，我是Webview</body></html>`
			let uri = Uri.file('~');
			commands.executeCommand('vscode.openFolder', uri).then(sucess => {
				console.log(sucess);
			});

		});

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
