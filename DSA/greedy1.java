
// start time : 9: 20pm

//Minimum Number of Platforms Required for a Railway/Bus Station

import java.io.*;
import java.util.*;

class Train {
	int arr, dep;

	Train(int arr, int dep) {
		this.arr = arr;
		this.dep = dep;
	}
}

class GFG {

	public static void main(String[] args) {
		int arr[] = { 900, 940, 950, 1100, 1500, 1800 };
		int dep[] = { 910, 1200, 1120, 1130, 1900, 2000 };
		ArrayList<Train> tr = new ArrayList();
		for (int i = 0; i < dep.length; i++) {
			tr.add(new Train(arr[i], dep[i]));
		}
		Collections.sort(tr, new Comparator<Train>() {
			public int compare(Train t1, Train t2) {
				return t1.arr - t2.arr;
			}
		});
		int count = 1;
		PriorityQueue<Integer> pq = new PriorityQueue<>();
		pq.add(tr.get(0).dep);
		for (int i = 1; i < tr.size(); i++) {
			if (tr.get(i).arr <= pq.peek()) {
				count++;
			} else {
				pq.poll();
			}
			pq.add(tr.get(i).dep);
		}
		System.out.print(pq.size());
	}
}