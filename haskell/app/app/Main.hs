module Main where

import qualified MyLib (someFunc)
import Control.Monad
import System.Directory
import Paths_app
main :: IO ()


main = do
    currentDir <- getCurrentDirectory
    files <- getDirectoryContents currentDir
    print files
    dir    <- getDataDir
    files' <- getDirectoryContents dir
    files  <- filterM doesFileExist files'
    file   <- getDataFileName $ head files
    txt    <- readFile file
    putStr txt