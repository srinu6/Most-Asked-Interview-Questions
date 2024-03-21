
/*Given an 2D integer array A of size N x 2 denoting time intervals of different meetings.

 

Where:

 

A[i][0] = start time of the ith meeting.
A[i][1] = end time of the ith meeting.
 

Find the minimum number of conference rooms required so that all meetings can be done.

Note :- If a meeting ends at time t, another meeting starting at time t can use the same conference room */
import java.io.*;
import java.util.*;

public class Solution {
    class Meet {
        int arr, dep;

        Meet(int arr, int dep) {
            this.arr = arr;
            this.dep = dep;
        }
    }

    public int solve(ArrayList<ArrayList<Integer>> A) {
        ArrayList<Meet> tr = new ArrayList();
        for (int i = 0; i < A.size(); i++) {
            tr.add(new Meet(A.get(i).get(0), A.get(i).get(1)));
        }
        Collections.sort(tr, new Comparator<Meet>() {
            public int compare(Meet m1, Meet m2) {
                if (m1.arr == m2.arr)

                    return m1.dep - m2.dep;
                return m1.arr - m2.arr;
            }
        });
        int me = 1;
        PriorityQueue<Integer> pq = new PriorityQueue();
        pq.add(tr.get(0).dep);

        for (int i = 1; i < tr.size(); i++) {
            if (tr.get(i).arr < pq.peek()) {
                me++;
            } else {
                pq.poll();
            }

            pq.add(tr.get(i).dep);
        }
        return me;
    }

}
