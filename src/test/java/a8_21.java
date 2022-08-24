import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class a8_21 {
    public static void main(String[] args) {

        String[] strings = {"apple", "iOS", "dog", "nana", "man", "good", "goodman"};
        String res = longestWord(strings);
        return;

    }

    //        1首先要是由其他单词组合而成
//        2是这些单词中最长的
//        3先排个序吧，把字典序大的排在前面,同时长度短的在前面
    public static String longestWord(String[] words) {
//        排序
        Arrays.sort(words, (x, y) -> {
            if (x.length() != y.length()) {
                return x.length() - y.length();
            } else {
                return y.compareTo(x);
            }
        });
        Set<String> set = new HashSet<>(Arrays.asList(words));
        for (int i = 0; i < words.length; i++) {
//            set中除去自己和其他的word比较是否由他们组成；
            set.remove(words[i]);
            if (pd2(set, words[i])) {
//                是就返回word
                return words[i];
            }
//            补回去别少了
            set.add(words[i]);
        }
        return "";


        // write code here
    }

    //    word是否由set中的word组成
//    循环递归判断
    public static boolean pd(Set<String> set, String word) {
        if (word.length() == 0) {
            return true;
        }
        for (int i = 0; i < word.length(); i++) {
            if (set.contains(word.substring(0, i + 1)) && pd(set, word.substring(i + 1))) {
                return true;
            }
        }
        return false;
    }

    //    word是否由set中的word组成
//    循环递归判断
    public static boolean pd2(Set<String> set, String word) {
        for (int i = 0; i < word.length(); i++) {
            String leftStr = word.substring(0, i + 1);
            String rightStr = word.substring(i + 1);
            if (set.contains(leftStr)) {
                if (set.contains(rightStr)) {
                    return true;
                } else if (pd(set, rightStr)) {
                    return true;
                }
            }
        }
        return false;
    }
}
