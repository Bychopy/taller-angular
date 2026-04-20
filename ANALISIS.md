# ANALISIS

## 1. Asincronismo

Utilizamos Observable y subscribe porque el HTTP no esta disponible inmediatamente, sino que la fuente de datos envia el resultado cuando obtiene la respuesta del server.
Con subscribe se define que hacer en el momento en que se obtiene esa respuesta (como calcular un promedio)
Si se intentara asignar de forma sincronizada, no se llenarian los datos correctamente.


## 2. Modularización
Si el componente no esta declarado correctamente y usas el selector en la plantilla, Angula no lo reconoce y retorna un error. Esto sucede por que el template intenta usar una tag que el modulo no reconoce, y o bien no compila y termina sin correr, o no lo renderiza bien.
