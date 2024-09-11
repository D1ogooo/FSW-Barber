"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/seach"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"
import { signIn, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

const SidebarButton = () => {
  const { data } = useSession()
  async function handleLoginWithGoogleClick() {
    await signIn("google")
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                height={50}
                width={50}
                src={data?.user?.image ?? ""}
              />
            </Avatar>

            <div className="ml-3 flex flex-col">
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <h2 className="font-bold">Olá, faça seu login</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta do Google
                  </DialogDescription>
                </DialogHeader>

                <Button
                  variant="outline"
                  className="gap-1 font-bold"
                  onClick={handleLoginWithGoogleClick}
                >
                  <Image
                    alt="fazer login com o google"
                    src="/googleIcon.svg"
                    width={18}
                    height={18}
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>{" "}
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image alt="" src={option.imageUrl} height={18} width={18} />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarButton
