import { useState, useEffect } from 'react';
import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion';
import { ChevronDown, Landmark, Settings, Cpu, Users } from 'lucide-react';
import type { GovernanceBody } from '../../types/governance';

const iconMap = {
  Landmark,
  Settings,
  Cpu,
  Users,
};

interface Props {
  bodies: GovernanceBody[];
}

export default function GovernanceAccordion({ bodies }: Props) {
  useEffect(() => {
    console.log('GovernanceAccordion interactive');
    console.log('Bodies available:', bodies?.length);
  }, [bodies]);

  if (!bodies || bodies.length === 0) {
    return <div className="text-center py-8">No hay contenido disponible</div>;
  }

  return (
    <Root type="single" collapsible className="space-y-4">
      {bodies.map((body, index) => {
        const IconComponent = body.icon ? iconMap[body.icon as keyof typeof iconMap] : null;

        return (
          <Item
            key={`governance-${index}`}
            value={`item-${index}`}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <Header>
              <Trigger
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors group"
                aria-label={`Abrir ${body.title}`}
              >
                <div className="flex items-start gap-4 flex-1">
                  {IconComponent && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {body.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {body.description}
                    </p>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180 shrink-0 ml-4" />
              </Trigger>
            </Header>
            <Content
              data-radix-accordion-content
              className="overflow-hidden px-6 bg-slate-50 border-t border-slate-200"
            >
              <div className="py-5">
                {body.content && (
                  <div className="text-slate-700 leading-relaxed mb-4 whitespace-pre-line">
                    {body.content}
                  </div>
                )}
                {body.functions && body.functions.length > 0 && (
                  <ul className="space-y-3">
                    {body.functions.map((func, idx) => (
                      <li key={`func-${index}-${idx}`} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-slate-700 flex-1">{func}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {body.footer && (
                  <div className="text-slate-700 leading-relaxed mt-4 whitespace-pre-line">
                    {body.footer}
                  </div>
                )}
              </div>
            </Content>
          </Item>
        );
      })}
    </Root>
  );
}
