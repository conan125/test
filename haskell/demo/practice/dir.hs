import system.Directory (getCurrentDirectory, getDirectoryContents)

main = do
  currentDir <- getCurrentDirectory
  files <- getDirectoryContents currentDir
  print files
