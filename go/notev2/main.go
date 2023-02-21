package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/driver/desktop"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
)

var aloha = widget.NewLabel("Aloha ~~~~~~~~~~~~ :-)")

func makeMenu() *fyne.MainMenu {
	var menuFile = fyne.NewMenu("File",
		fyne.NewMenuItem("New", func() { aloha.SetText("New") }),
	)
	var menuEdit = fyne.NewMenu("Edit",
		fyne.NewMenuItem("Undo", func() { aloha.SetText("Undo") }),
		fyne.NewMenuItemSeparator(),
		fyne.NewMenuItem("Cut", func() { aloha.SetText("Cut") }),
		fyne.NewMenuItem("Copy", func() { aloha.SetText("Copy") }),
		fyne.NewMenuItem("Paste", func() { aloha.SetText("Past") }),
		fyne.NewMenuItem("Select All", func() { aloha.SetText("Select All") }),
		fyne.NewMenuItemSeparator(),
		fyne.NewMenuItem("Aloha ~~~", func() {
			aloha.SetText("Aloha ~~~~~~~~~~~~ :-)")
		}),
	)
	var menu = fyne.NewMainMenu(menuFile, menuEdit)
	return menu
}
func main() {
	app := app.New()
	win := app.NewWindow("Menu")
	win.SetMainMenu(makeMenu())
	content := container.New(layout.NewCenterLayout(), aloha)
	win.SetContent(content)
	win.Resize(fyne.NewSize(400, 200))
	win.Canvas().AddShortcut(
		&desktop.CustomShortcut{
			KeyName:  fyne.KeyN,
			Modifier: desktop.ControlModifier,
		},
		func(s fyne.Shortcut) { aloha.SetText("New") },
	)
	win.Canvas().AddShortcut(
		&desktop.CustomShortcut{
			KeyName:  fyne.KeyU,
			Modifier: desktop.ControlModifier,
		},
		func(s fyne.Shortcut) { aloha.SetText("Undo") },
	)
	win.Canvas().AddShortcut(
		&desktop.CustomShortcut{
			KeyName:  fyne.KeyX,
			Modifier: desktop.ControlModifier,
		},
		func(s fyne.Shortcut) { aloha.SetText("Cut") },
	)
	win.Canvas().AddShortcut(
		&desktop.CustomShortcut{
			KeyName:  fyne.KeyC,
			Modifier: desktop.ControlModifier,
		},
		func(s fyne.Shortcut) { aloha.SetText("Copy") },
	)
	win.Canvas().AddShortcut(
		&desktop.CustomShortcut{
			KeyName:  fyne.KeyV,
			Modifier: desktop.ControlModifier,
		},
		func(s fyne.Shortcut) { aloha.SetText("Paste") },
	)
	win.Canvas().AddShortcut(
		&desktop.CustomShortcut{
			KeyName:  fyne.KeyA,
			Modifier: desktop.ControlModifier,
		},
		func(s fyne.Shortcut) { aloha.SetText("Select All") },
	)
	win.Canvas().AddShortcut(
		&desktop.CustomShortcut{
			KeyName:  fyne.KeyA,
			Modifier: desktop.AltModifier,
		},
		func(s fyne.Shortcut) {
			aloha.SetText("Aloha ~~~~~~~~~~~~ :-)")
		},
	)
	win.ShowAndRun()
}