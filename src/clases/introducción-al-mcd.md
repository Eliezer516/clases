---
title: Introducción al MCD
date: 2025-02-07T12:01:00
encuentro: '8'
clase: 15 - 16
sveltiafilter: 1eraño-matematicas
seccion: 1eraño
area: matematicas
---
El **máximo común divisor (MCD)** de dos o más números es el número más grande que puede dividir a todos esos números sin dejar un residuo. Es una herramienta fundamental en la teoría de números y tiene aplicaciones en diversas áreas, como la simplificación de fracciones, la resolución de problemas de divisibilidad y la optimización.

### Propiedades del MCD

1. **Divisibilidad**: El MCD de dos números siempre es un divisor de ambos.
2. **Conmutatividad**: \( \text{MCD}(a, b) = \text{MCD}(b, a) \).
3. **Asociatividad**: \( \text{MCD}(a, \text{MCD}(b, c)) = \text{MCD}(\text{MCD}(a, b), c) \).
4. **MCD de múltiplos**: Si \( a \) es un múltiplo de \( b \), entonces \( \text{MCD}(a, b) = b \).

### Métodos para Calcular el MCD

1. **Descomposición en Factores Primos**:
   - Descomponer cada número en sus factores primos.
   - Multiplicar los factores comunes con el menor exponente.

2. **Algoritmo de Euclides**:
   - Se basa en la propiedad: \( \text{MCD}(a, b) = \text{MCD}(b, a \mod b) \).
   - Repetir el proceso hasta que \( b \) sea 0, en cuyo caso \( a \) será el MCD.

### Ejemplo

Calculemos el MCD de 48 y 18.

1. **Descomposición en Factores Primos**:
   - 48: \( 2^4 \times 3^1 \)
   - 18: \( 2^1 \times 3^2 \)

   Los factores comunes son \( 2^1 \) y \( 3^1 \), por lo que:
   \[
   \text{MCD}(48, 18) = 2^1 \times 3^1 = 6
   \]

2. **Algoritmo de Euclides**:
   - \( 48 \mod 18 = 12 \)
   - \( 18 \mod 12 = 6 \)
   - \( 12 \mod 6 = 0 \)

   Por lo tanto, \( \text{MCD}(48, 18) = 6 \).

### Aplicaciones del MCD

- **Simplificación de Fracciones**: Se utiliza el MCD para reducir fracciones a su forma más simple.
- **Resolución de Problemas de Divisibilidad**: Ayuda a encontrar múltiples comunes y a resolver ecuaciones diofantinas.
- **Teoría de Números**: Es fundamental en el estudio de propiedades numéricas y en la criptografía.

El MCD es un concepto esencial en matemáticas que permite simplificar y resolver problemas de manera efectiva.
