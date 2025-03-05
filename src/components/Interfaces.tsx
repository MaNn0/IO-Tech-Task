export interface Company {
    catchPhrase: string;
}

export interface Item {
    id: number;
    name: string;
    company: Company;
}

export interface AddProps {
    items: Item[],
    onAdd: (newItem: Item) => void;
}

export interface UpdateProps {
    item: Item;
    onUpdate: (updatedItem: Item) => void;
}

export interface DeleteProps {
    id: number;
    onDelete: (id: number) => void;
}


export interface FilterProps {
    onSort: (order: "asc" | "desc") => void;
}