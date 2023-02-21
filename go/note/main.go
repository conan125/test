/*
 * ......................................&&.........................
 * ....................................&&&..........................
 * .................................&&&&............................
 * ...............................&&&&..............................
 * .............................&&&&&&..............................
 * ...........................&&&&&&....&&&..&&&&&&&&&&&&&&&........
 * ..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............
 * ................&...&&&&&&&&&&&&&&&&&&&&&&&&&&&&.................
 * .......................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........
 * ...................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...............
 * ..................&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
 * ...............&&&&&@  &&&&&&&&&&..&&&&&&&&&&&&&&&&&&&...........
 * ..............&&&&&&&&&&&&&&&.&&....&&&&&&&&&&&&&..&&&&&.........
 * ..........&&&&&&&&&&&&&&&&&&...&.....&&&&&&&&&&&&&...&&&&........
 * ........&&&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&....&&&.......
 * .......&&&&&&&&.....................&&&&&&&&&&&&&&&&.....&&......
 * ........&&&&&.....................&&&&&&&&&&&&&&&&&&.............
 * ..........&...................&&&&&&&&&&&&&&&&&&&&&&&............
 * ................&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&............
 * ..................&&&&&&&&&&&&&&&&&&&&&&&&&&&&..&&&&&............
 * ..............&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&....&&&&&............
 * ...........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&......&&&&............
 * .........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.........&&&&............
 * .......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&............
 * ......&&&&&&&&&&&&&&&&&&&...&&&&&&...............&&&.............
 * .....&&&&&&&&&&&&&&&&............................&&..............
 * ....&&&&&&&&&&&&&&&.................&&...........................
 * ...&&&&&&&&&&&&&&&.....................&&&&......................
 * ...&&&&&&&&&&.&&&........................&&&&&...................
 * ..&&&&&&&&&&&..&&..........................&&&&&&&...............
 * ..&&&&&&&&&&&&...&............&&&.....&&&&...&&&&&&&.............
 * ..&&&&&&&&&&&&&.................&&&.....&&&&&&&&&&&&&&...........
 * ..&&&&&&&&&&&&&&&&..............&&&&&&&&&&&&&&&&&&&&&&&&.........
 * ..&&.&&&&&&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&&&&&&&&&&&&.......
 * ...&&..&&&&&&&&&&&&.........&&&&&&&&&&&&&&&&...&&&&&&&&&&&&......
 * ....&..&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&&&&&.....
 * .......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..............&&&&&&&....
 * .......&&&&&.&&&&&&&&&&&&&&&&&&..&&&&&&&&...&..........&&&&&&....
 * ........&&&.....&&&&&&&&&&&&&.....&&&&&&&&&&...........&..&&&&...
 * .......&&&........&&&.&&&&&&&&&.....&&&&&.................&&&&...
 * .......&&&...............&&&&&&&.......&&&&&&&&............&&&...
 * ........&&...................&&&&&&.........................&&&..
 * .........&.....................&&&&........................&&....
 * ...............................&&&.......................&&......
 * ................................&&......................&&.......
 * .................................&&..............................
 * ..................................&..............................
 *
 * @Author: matu-lgs
 * @Date: 2023-02-18 11:07:17
 * @LastEditors: matu-lgs
 * @LastEditTime: 2023-02-18 11:08:07
 */

package main

import (
	"io/ioutil"
	"os"

	"fyne.io/fyne"
	"fyne.io/fyne/app"
	"fyne.io/fyne/dialog"
	"fyne.io/fyne/layout"
	"fyne.io/fyne/theme"
	"fyne.io/fyne/widget"
)

func main() {
	a := app.New()
	a.Settings().SetTheme(theme.DarkTheme())
	w := a.NewWindow("Note")
	edit := widget.NewEntry()
	edit.MultiLine = true
	sc := widget.NewScrollContainer(edit)
	inf := widget.NewLabel("informationBar")
	//new file function
	nf := func() {
		dialog.ShowConfirm("Alert", "Create New document?", func(f bool) {
			if f {
				edit.SetText("")
				inf.SetText("create new document")
			}
		}, w)
	}

	//open file function
	of := func() {
		f := widget.NewEntry()
		dialog.ShowCustomConfirm("open file name", "OK", "Cancel", f, func(b bool) {
			if b {
				fn := f.Text + ".txt"
				ba, er := ioutil.ReadFile(fn)
				if er != nil {
					dialog.ShowError(er, w)
				} else {
					edit.SetText(string(ba))
					inf.SetText("open from file " + "fn" + ".")
				}
			}
		}, w)
	}
	// save function
	sf := func() {
		f := widget.NewEntry()
		dialog.ShowCustomConfirm("Save file name", "OK", "Cancel", f, func(b bool) {
			if b {
				fn := f.Text + ".txt"
				er := ioutil.WriteFile(fn, []byte(edit.Text), os.ModePerm)
				if er != nil {
					dialog.ShowError(er, w)
					return
				}
				inf.SetText("save the file" + "fn" + ".")
			}
		}, w)
	}

	// quit function
	qf := func() {
		dialog.ShowConfirm("Alert", "Quit application?", func(b bool) {
			if b {
				a.Quit()
			}
		}, w)
	}
	tf := true
	// change the theme
	cf := func() {
		if tf {
			a.Settings().SetTheme(theme.LightTheme())
			inf.SetText("change to Light-theme")
		} else {
			a.Settings().SetTheme(theme.DarkTheme())
			inf.SetText("change to Dark-theme")
		}
		tf = !tf
	}
	// create menu
	createMenubar := func() *fyne.MainMenu {
		return fyne.NewMainMenu(
			fyne.NewMenu("File",
				fyne.NewMenuItem("New", func() { nf() }),
				fyne.NewMenuItem("Open...", func() { of() }),

				fyne.NewMenuItem("Save...", func() { sf() }),
				fyne.NewMenuItem("Change Theme", func() { cf() }),
				fyne.NewMenuItem("Quit", func() { qf() })),
			fyne.NewMenu("Edit",
				fyne.NewMenuItem("Cut", func() {
					edit.TypedShortcut(&fyne.ShortcutCut{
						Clipboard: w.Clipboard(),
					})
					inf.SetText("Cut text")
				}),
				fyne.NewMenuItem("Copy", func() {
					edit.TypedShortcut(&fyne.ShortcutCopy{
						Clipboard: w.Clipboard(),
					})
					inf.SetText("Copy text")
				}),
				fyne.NewMenuItem("Paste", func() {
					edit.TypedShortcut(&fyne.ShortcutPaste{
						Clipboard: w.Clipboard(),
					})
					inf.SetText("Paste text")
				}),
			),
		)
	}
	//create toolbar function
	createToolBar := func() *widget.Toolbar {
		return widget.NewToolbar(
			widget.NewToolbarAction(
				theme.DocumentCreateIcon(), nf,
			),
			widget.NewToolbarAction(
				theme.FolderOpenIcon(), of,
			),
			widget.NewToolbarAction(
				theme.DocumentSaveIcon(), sf,
			),
		)
	}
	mb := createMenubar()
	tb := createToolBar()
	w.SetMainMenu(mb)
	w.SetContent(fyne.NewContainerWithLayout(
		layout.NewBorderLayout(
			tb, inf, nil, nil,
		),
		tb, inf, sc,
	))
	w.Resize(fyne.NewSize(800, 800))
	w.ShowAndRun()
}
