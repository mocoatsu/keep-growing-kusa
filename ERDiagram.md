```mermaid
erDiagram
	enginners ||--o{ friends : ""
	enginners {
	  bigint id PK
	  varchar100 name
	  varchar255 introduction
	  timestamp created_at
	  timestamp updated_at
	}
	friends {
	  bigint id PK
	  bigint enginner_id FK
	  timestamp created_at
	  timestamp updated_at
	}
	achievement {
		bigint id PK
		varchar100 name
		timestamp created_at
	}
	<!-- 各エンジニアが解除した実績 -->
	unlock_achievement {
	  bigint id PK
	  timestamp created_at
	}


```
