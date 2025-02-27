//! SeaORM Entity. Generated by sea-orm-codegen 0.10.1

use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq)]
#[sea_orm(table_name = "files")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub created_at: DateTime,
    pub updated_at: DateTime,
    pub name: String,
    pub content: String,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::source_files::Entity")]
    SourceFiles,
}

impl Related<super::source_files::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::SourceFiles.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}
