package com.example.miniui;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

public class Json {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        ArrayList<Integer> list = new ArrayList();
        for (int i = 0; i < x; i++) {
            list.add(sc.nextInt());
        }
        list.sort(Comparator.naturalOrder());
        int count = 0;
        while (list.size() > 1) {
            update(list);
            count++;
        }

        System.out.println(count);
    }

    public static boolean update(ArrayList<Integer> list) {
        int x = list.get(0);
        for (int i = 1; i < list.size(); i++) {
            if (list.get(i) % x == 0) {
                list.remove(i);
                i--;
            }
        }
        if (list.size() > 1) {
            list.remove(0);
            return true;
        } else {

            return false;
        }
    }
}