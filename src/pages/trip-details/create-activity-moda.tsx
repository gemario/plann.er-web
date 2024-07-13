import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({closeCreateActivityModal}: CreateActivityModalProps ) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-white text-lg font-semibold">
                  Cadastrar atividade
                </h2>
                <button type="button" onClick={closeCreateActivityModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-zinc-400 text-sm">
                Todos convidados podem visualizar as atividades.
              </p>
            </div>
            <form className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="size-5 text-zinc-400 " />
                <input
                  name="title"
                  placeholder="Qual a atividade?"
                  className="bg-transparent placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <div className="flex items-center">
                <div className="w-full h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Calendar className="size-5 text-zinc-400 " />
                  <input
                    type="datetime-local"
                    name="occurs_at"
                    placeholder="Data e horário da atividade"
                    className="bg-transparent placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
              </div>
              <Button variant="primary" size="full">
                Salvar atividade
              </Button>
            </form>
          </div>
        </div>
  )
}