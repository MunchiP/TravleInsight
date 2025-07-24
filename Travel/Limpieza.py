#%%
import pandas as pd

# Carga del archivo
archivo = "Registro_Nacional_de_Turismo.csv"
df = pd.read_csv(archivo)

#%%
print(df.columns)
print(df.head(50))

#%%
# columnas importantes 
columnas = [
    'RAZON_SOCIAL_ESTABLECIMIENTO',
    'DEPARTAMENTO', 
    'MUNICIPIO', 
    'CATEGORIA',
    'SUB_CATEGORIA', 
    'ESTADO_RNT', 
    'HABITACIONES',  # SOLO PARA HOTELES
    'CAMAS',  # SOLO PARA HOTELES
    'CORREO_ESTABLECIMIENTO', 
]

df = df[columnas]
 #%%
 
# filtra solo Boyacá y Cundinamarca
df = df[df['DEPARTAMENTO'].isin(['BOYACA', 'CUNDINAMARCA'])]

# Filtra solo registros activos o renovados 
df = df[df['ESTADO_RNT'].isin(['ACTIVO', 'RENOVADO'])]
#%%
# elimina filas repetidas y vacías
df = df.drop_duplicates()
df = df.dropna(subset=['RAZON_SOCIAL_ESTABLECIMIENTO', 'DEPARTAMENTO', 'MUNICIPIO'])

# eXPORTA
df.to_csv('rnt_limpio.csv', index=False)


# %%

print(df.sample(10))
# %%
