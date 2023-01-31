import { FastifyInstance } from "fastify"
import { z } from "zod"
import WebPush from "web-push"

// console.log(WebPush.generateVAPIDKeys());

const publicKey = process.env.API_WEBPUSH_PUBLICKEY
const privateKey = process.env.API_WEBPUSH_PRIVATEKEY
const domain = process.env.API_DOMAIN

if (publicKey && privateKey && domain) {
  WebPush.setVapidDetails(domain, publicKey, privateKey)
} else {
  console.log("Erro! sem chaves!!") 
}

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    }
  })

  app.post('/push/register', (request, reply) => {
    // a notar em uma tabela a notificação para o usuário logado

    return reply.status(201).send()
  })

  app.post('/push/send', (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        })
      })
    })

    const { subscription } = sendPushBody.parse(request.body)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'Habits, mensagem do Backend apos 5s!!')
    }, 5000)

    return reply.status(201).send()
  })
}