// user数据表响应的接口
interface IUser {
    u_birthday: string;
    u_cell_num: string;
    u_email: string;
    u_experience: number;
    u_head: null | string;
    u_id: number;
    u_ip: null | string;
    u_logic_del: number;
    u_name: string;
    u_nickname: string;
    u_password: string;
    u_real_del: number;
    u_register_time: string;
    u_sgrade: number;
    u_signature: string;
}
export{
    IUser,
}
