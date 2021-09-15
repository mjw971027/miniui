package com.example.miniui.factory;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;

public class TEST {
    public static void main(String[] args) throws NoSuchMethodException {
        Enum e1 = Enum.INSTANCE;
        Constructor<Enum> declaredConstructor = Enum.class.getDeclaredConstructor(null);
        declaredConstructor.setAccessible(true);
    }
}
