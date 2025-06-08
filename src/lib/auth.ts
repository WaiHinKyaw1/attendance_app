import jwt from 'jsonwebtoken'; 

export function getUserFromRequest(req: Request) {
  const token = req.headers.get('cookie')?.split('; ').find(c => c.startsWith('token='))?.split('=')[1];
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string, role: string };
  } catch (e) {
    return null;
  }
}
