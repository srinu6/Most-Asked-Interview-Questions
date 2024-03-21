import java.util.*;
import java.lang.*;
import java.io.*;

class Solution {
    
    public static void DFS(char[][] grid, int i, int j, int ROW, int COL, boolean[][] bol){
        
        bol[i][j]=true;
        
        if(isSafe(grid, i+1, j, ROW, COL, bol)){
            DFS(grid, i+1, j, ROW, COL, bol);
        } if(isSafe(grid, i, j+1, ROW, COL, bol)){
            DFS(grid, i, j+1, ROW, COL, bol);
        } if(isSafe(grid, i+1, j+1, ROW, COL, bol)){
            DFS(grid, i+1, j+1, ROW, COL, bol);
        } if(isSafe(grid, i-1, j, ROW, COL, bol)){
            DFS(grid, i-1, j, ROW, COL, bol);
        } if(isSafe(grid, i, j-1, ROW, COL, bol)){
            DFS(grid, i, j-1, ROW, COL, bol);
        } if(isSafe(grid, i-1, j-1, ROW, COL, bol)){
             DFS(grid, i-1, j-1, ROW, COL, bol);
        } if(isSafe(grid, i+1, j-1, ROW, COL, bol)){
            DFS(grid, i+1, j-1, ROW, COL, bol);
        } if(isSafe(grid, i-1, j+1, ROW, COL, bol)){
            DFS(grid, i-1, j+1, ROW, COL, bol);
        }
  
    }
    
    public static boolean isSafe(char[][] grid, int row, int col, int ROW, int COL, boolean[][] bol){
        if(row >= 0 && col >= 0 && col < COL && row < ROW && grid[row][col] == '1' && !bol[row][col]){
            return true;
        }
        return false;
    }
    
    // Function to find the number of islands.
    public int numIslands(char[][] grid) {
        int count=0;
        // Code here
        boolean[][] bol=new boolean[grid.length][grid[0].length];
        
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                bol[i][j]=false;
            }
        }
        
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j] == '1' && !bol[i][j]){
                    DFS(grid, i, j, grid.length, grid[0].length, bol);
                    count++;
                }
            }
        }
        return count;
        
    }
}