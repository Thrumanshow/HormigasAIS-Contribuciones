# Manejo de Errores Híbridos — `.HORMIGASAIS`

El siguiente diagrama ilustra cómo funciona el manejo de errores híbridos implementado en el parche `.HORMIGASAIS`.  
Se distingue entre **error estándar** y **error híbrido con éxito anticipado (PREDICTED_SUCCESS)**:

- **Error Estándar ❌**: El sistema detecta el fallo y lo reporta al usuario.
- **Error Híbrido PREDICTED_SUCCESS ✅**: El sistema anticipa un posible éxito y continúa el flujo, evitando interrupciones.

![Diagrama de Manejo de Errores Híbridos](https://private-user-images.githubusercontent.com/179357123/481910734-59a5eb92-a763-4f91-92f4-cf385086e08b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYxODM5NDUsIm5iZiI6MTc1NjE4MzY0NSwicGF0aCI6Ii8xNzkzNTcxMjMvNDgxOTEwNzM0LTU5YTVlYjkyLWE3NjMtNGY5MS05MmY0LWNmMzg1MDg2ZTA4Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyNlQwNDQ3MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MzJhNDEwZjAxY2NjOThiZGI5NjcyMTQ5MmE2YTFhZDk2ZTBkYzUxMGQ2N2IwZDNmM2UzZTQ5NjJkMTBkNGM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.iY3B3a49UEGKuikStbojtPsNBgkaVO1mTznXDbqYy-s)

**Flujo resumido**:
1. El script (Python/JS) se ejecuta.
2. Se obtiene un resultado inicial (Error o Éxito).
3. `.HORMIGASAIS` decide si es un error estándar o híbrido.
4. Se reporta al usuario o se aplica el éxito anticipado automáticamente.
