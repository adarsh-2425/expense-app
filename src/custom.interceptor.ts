import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from "rxjs";

// I want to define a CustomInterceptor that behaves like NestIntercepter , thats why 'implements
export class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler){
        
        console.log('intercepting the request')
        console.log({context})
        
        return handler.handle().pipe(
            map(data => {
                console.log('intercepting the response')
                const response = {
                    ...data,
                    createdAt: data.created_at
                }
                delete response.updated_at //delete
                delete response.created_at
                return response;
            })
        )
    }
}