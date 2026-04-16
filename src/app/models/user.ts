
export class User {

    id!: number;
    // role_id: number = 3; // 3 = Rol miembro
    username: string = "";
    email: string = "";
    password?: string = "";
    first_name: string = "";
    last_name: string = "";
    token: string = "";
    is_active: number = 0;
    n_doc: number = 0;
    created_at: string = "";
    image: string = "";
    role?: 'SUPERADMIN' | 'ADMIN' | 'MEMBER' | 'GUEST';
    

}
